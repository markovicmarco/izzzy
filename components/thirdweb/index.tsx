/**
 * Copyright 2022 Izzzy Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 import { ChainId, useNetwork, useTokenDrop } from "@thirdweb-dev/react";
 import { useNetworkMismatch } from "@thirdweb-dev/react";
 import { useAddress, useMetamask } from "@thirdweb-dev/react";
 import type { NextPage } from "next";
 import { useEffect, useState } from "react";
 import styles from "./minting-page.module.css";
 
 // Put Your NFT Drop Contract address from the dashboard here
 const myTokenDropContractAddress = "0xBA5dcA17a2B11Dd29f93D0f1dD37D1283109feD9";
 
 const TokenMinting: NextPage = () => {
   const tokenDrop = useTokenDrop(myTokenDropContractAddress);
   const address = useAddress();
   const connectWithMetamask = useMetamask();
   const isOnWrongNetwork = useNetworkMismatch();
   const [, switchNetwork] = useNetwork();

   // The amount the user claims, updates when they type a value into the input field.
   const [quantity, setQuantity] = useState<number>(1); // default to 1
   const [claiming, setClaiming] = useState<boolean>(false);
 
   const [contractMetadata, setMetadata] = useState<{
     name: string;
     description?: string | undefined;
     image?: string | undefined;
   }>();
 
   const [totalSupply, setTotalSupply] = useState<number>();
 
   useEffect(() => {
     (async () => {
       const totalsupply = await tokenDrop?.totalSupply();
 
       
       // Load NFT Drop Contract metadata
       const metadata = await tokenDrop?.metadata.get();
       setMetadata(metadata);
     })();
   }, [tokenDrop]);
 
   // Loading state while we fetch the metadata
   if (!tokenDrop || !contractMetadata) {
     return <div className={styles.container}>Loading...</div>;
   }
 
   // Function to mint/claim an NFT
   async function mint() {
     if (!address) {
       connectWithMetamask();
       return;
     }
 
     if (isOnWrongNetwork) {
       switchNetwork && switchNetwork(ChainId.Mainnet);
       return;
     }
 
     setClaiming(true);
 
     try {
       const minted = await tokenDrop?.claim(1);
       console.log(minted);
       alert(`Successfully minted NFT!`);
     } catch (error) {
       console.error(error);
       alert(error);
     } finally {
       setClaiming(false);
     }
   }
 
   return (
     <div className={styles.container}>
       <div className={styles.mintInfoContainer}>
         <div className={styles.infoSide}>
           {/* Title of your NFT Collection */}
           <h1>{contractMetadata?.name}</h1>
           {/* Description of your NFT Collection */}
           <p className={styles.description}>{contractMetadata?.description}</p>
         </div>
 
         <div className={styles.imageSide}>
           {/* Image Preview of NFTs */}
           <img
             className={styles.image}
             src={contractMetadata?.image}
             alt={`${contractMetadata?.name} preview image`}
           />
 
           {address ? (
            <>
            <div className={styles.quantityContainer}>
              <button
                className={`${styles.quantityControlButton}`}
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity <= 1}
              >
                -
              </button>

              <h4>{quantity}</h4>

              <button
                className={`${styles.quantityControlButton}`}
                onClick={() => setQuantity(quantity + 1)}
                disabled={quantity >= 10}
              >
                +
              </button>
            </div>
             <button className={styles.mainButton} onClick={mint}>
               Mint
             </button>
             </>
            ) : (
             <button className={styles.mainButton} onClick={connectWithMetamask}>
               Connect Wallet
             </button> 
           )}
          
           {/* Amount claimed so far */}
           <div className={styles.mintCompletionArea}>
             <div className={styles.mintAreaLeft}>
               <p>Total Minted</p>
             </div>
             <div className={styles.mintAreaRight}>
               {totalSupply ? (
                 <p>
                   {" / "}
                   {totalSupply}
                 </p>
               ) : (
                 <p>Loading...</p>
               )}
             </div>
           </div>
 
         </div>
       </div>
     </div>
   );
 };
 
 export default TokenMinting;
