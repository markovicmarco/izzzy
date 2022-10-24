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

import styles from './project-info.module.css'

export default function ProjectInfo() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <div className={styles.grid}>
           <h2>Vision </h2>
            <p>
            Our vision is to create a recognizable decentralized brand. 
            Make an impact on web3 metaverse. 
            Non-fungible assets and the virtual world on Ethereum.
            </p>
        </div>
        <div className={styles.grid}>
           <h2>Smart Contract </h2>
            <p>
            Deploying NFT contract on the Ethereum network. 
            Setting up a collection on OpenSea. 
            Embedding the mint button on our website.
            </p>
        </div>
        <div className={styles.grid}>
           <h2>Community </h2>
            <p>
            Everything starts and ends with the community. 
            The most valuable part of Izzzy is our top priority. 
            Built and owned by the community.
            </p>
        </div>
        <div className={styles.grid}>
           <h2>Pre-sale Mint </h2>
            <p>
            Presale minting links available at discord. 
            Minting for community members and early supporters of Izzzy NFT project before the official mint. 
            The earliest possible opportunity.
            </p>
        </div>
        <div className={styles.grid}>
           <h2>Physical Assets </h2>
            <p>
            Designing clothing for the metaverse. 
            Members of the Izzzy can expect exclusive merch in perpetuity. 
            Collaboration with fashion brands and influencers.
            </p>
        </div>
        <div className={styles.grid}>
           <h2>Public Minting </h2>
            <p>
            The process of public minting. 
            Investors will be able to buy into a collection at the earliest possible opportunity. 
            Opportunity for early backers.
            </p>
        </div>
        <div className={styles.grid}>
           <h2>Giveaway </h2>
            <p>
            Access to exclusive giveaways for our community. 
            Chance to win free NFTs, t-shirts, hoodies, and much more. 
            Pleasant surprise for supporters.
            </p>
        </div>
        <div className={styles.grid}>
           <h2>Web3 Game </h2>
            <p>
            Virtual experiences on the Blockchain. 
            Public developing virtual and metaverse world modeling. 
            Empower creators to build the game they have always envisioned.
            </p>
        </div>
        <div className={styles.grid}>
           <h2>Token Creation </h2>
            <p>
            A currency that people can use in the metaverse. 
            Shop, game, buy and trade assets, objects, and more. 
            Fair distribution to nft holders and community members.
            </p>
        </div>
      </main>
    </div>
  )
}