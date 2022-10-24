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

import type { NextPage } from "next";
import styles from "./listed.module.css";
import {
  MediaRenderer,
  useActiveListings,
  useMarketplace,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
 
const ListedNfts: NextPage = () => {
  const router = useRouter();

  // Connect your marketplace smart contract here (replace this address)
  const marketplace = useMarketplace(
    "0xBA5dcA17a2B11Dd29f93D0f1dD37D1283109feD9" // Your marketplace contract address here
  );

  const { data: listings, isLoading: loadingListings } =
    useActiveListings(marketplace);

  return (
    <>{/* Content */}
    <div className={styles.container}> 
        <div className="main">
          {
            // If the listings are loading, show a loading message
            loadingListings ? (
              <div>Loading listings...</div>
            ) : (
              // Otherwise, show the listings
              <div className={styles.listingGrid}>
                {listings?.map((listing) => (
                  <div
                    key={listing.id}
                    className={styles.listingShortView}
                    onClick={() => router.push(`/listing/${listing.id}`)}
                  >
                    <MediaRenderer
                      src={listing.asset.image}
                      style={{
                        borderRadius: 16,
                        // Fit the image to the container
                        width: "100%",
                        height: "100%",
                      }}
                    />

                    <p className={styles.price}>
                      <b>{listing.buyoutCurrencyValuePerToken.displayValue}</b>{" "}
                      {listing.buyoutCurrencyValuePerToken.symbol}
                    </p>
                  </div>
                ))}
              </div>
            )
          }
        </div>
    </div></>
  );
};

export default ListedNfts;