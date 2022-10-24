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


 import Page from '@components/page';
 import Layout from '@components/layout';
 
 import ListedNfts from '@components/thirdweb/listed';
 import { ThirdwebProvider } from '@thirdweb-dev/react';
 import { ChainId } from '@thirdweb-dev/sdk';
import Header from '@components/header';
import { Counter } from '@components/counter';
 
 // This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;
 
 export default function Nfts() {
   const meta = {
     title: 'Nft - Discover upcoming NFTs minting right now',
     description: 'List of actual ICO and NFT collection minting dates, rating, ongoing, and upcoming projects. Just be patient and enjoy the journey to the metaverse without losing focus. It will take a while to get an established value. Nothing great ever happens overnight!'
   };
 
   return (
    <ThirdwebProvider desiredChainId={activeChainId}>
     <Page meta={meta}>
       <Layout>
       <Header hero="Listing" description={meta.description} />
         <Counter />
         <ListedNfts children={meta}/>
       </Layout>
     </Page>
    </ThirdwebProvider>
   );
 }
 
 
 