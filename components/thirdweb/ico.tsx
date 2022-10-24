/**
 * Copyright 2020 Vercel Inc.
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

 import cn from 'classnames';
 import {
    useAddress,
    useDisconnect,
    useMetamask,
    useContract,
  } from "@thirdweb-dev/react";
  import truncateAddress from "@lib/truncate-address";
 import styles from './ico.module.css';
 import IcoClaim from './token-claim';
 
 
 export default function IcoEntry() {
   const address = useAddress();
   const connectWithMetamask = useMetamask();
   const disconnectWallet = useDisconnect();
   const { contract } = useContract("0x612e62488A2d36018ec7539a6a8BcfFC412B5eD6", "token-drop")


 
   return (
    <div>{address ? (
      <>
      <header className={cn(styles.header)}>
      <button onClick={disconnectWallet} className={cn(styles['header-right'])} >
      {truncateAddress(address)}
      </button>
      </header>    
      <IcoClaim contract={contract} />
     
           </>
           ) : (
        <header className={cn(styles.header)}>
        <button onClick={connectWithMetamask} className={cn(styles['header-right'])} >
        Connect Wallet
        </button>
        </header>  
        )}
    </div>
   );
 }


 