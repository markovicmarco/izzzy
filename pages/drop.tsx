import React from "react";
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';
import Head from "next/head";
import Page from "@components/page";
import Layout from "@components/layout";
import IcoEntry from "@components/thirdweb/ico";


// This is the chainId your dApp will work on.
const activeChainId = ChainId.Polygon;

export default function FreeTokenDrop() {
    const meta = {
        title: 'Drop - Pre ICO token drop', 
        description: 'Claim tokens of a project in the early stage cryptocurrency drop, connect wallet to Polygon network, and mint. Subscribe on twitter and join our discord server.',
    };


  return (
    <ThirdwebProvider chainRpc={{ [ChainId.Polygon]: "https://greatest-ultra-sanctuary.matic.discover.quiknode.pro/adf75ea0d82d63950150374ba971d972caf32883/" }} desiredChainId={ChainId.Polygon}>
      <Head>
        <title>Initial Coin Offering</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Pre-ICO discounted price before the official public sale. This currency will be used as a management token for the exchange, it can be bought and traded between users on a decentralized exchange, add liquidity and earn from the liquidity pool, allow users to vote, making the main decisions on the platform from a decentralized structure to the whole community"
        />
        <meta
          name="keywords"
          content="token drop, token transfer, token claim, token claim phases, ico, initial coin offering"
        />
      </Head>
     <Page meta={meta}>
      <Layout> 
        <IcoEntry />
      </Layout>
     </Page>
    </ThirdwebProvider>
  );
}



