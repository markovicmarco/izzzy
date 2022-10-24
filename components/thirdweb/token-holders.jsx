import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import React, { useState, useEffect } from "react";
import truncateAddress from "@lib/truncate-address";
import styles from "./token-holders.module.css";

export default function TokenHolders() {
  const [loading, setLoading] = useState(true);
  const [holders, setHolders] = useState([]);
  async function checkHolders() {
    const sdk = new ThirdwebSDK("polygon"); // configure this to your network

    const token = sdk.getToken("0x3Cf62752E752671F9B5D383901eE2bECBd1BD56B");

    const balances = await token.history.getAllHolderBalances();
    setHolders(balances);
    setLoading(false);
  }

  useEffect(() => {
    checkHolders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <><div className={styles.container}>
        <div className={styles['card-body']}>
        {holders
          .sort(
            (a, b) =>
              parseInt(b.balance.displayValue) -
              parseInt(a.balance.displayValue)
          )
          .map((holder) => (
            <div
              key={holder.holder}
              className={`${styles.holderItem} ${styles.spacerBottom}`}
            >
              <p>{truncateAddress(holder.holder)}</p>
              <p>
                {holder.balance.displayValue} {holder.balance.symbol}
              </p>
            </div>
          ))}
       </div>
      </div>
    </>
  );
}