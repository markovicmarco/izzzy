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
  } from "@thirdweb-dev/react";
 import React, { useState } from 'react';
 import styleUtils from '../utils.module.css';
 import styles from './ico.module.css';
 import { TokenCounter } from './token-counter';
 
 
 export default function IcoClaim({contract} : {contract:any}) {
  const address = useAddress();
  const [amountToClaim, setAmountToClaim] = useState("");
  async function claim() {
    if (!amountToClaim || !address) {
      return;
    }

    try {
      const claimResult = await contract?.claim(amountToClaim);
      console.log("Claimed", claimResult);
      alert("Successfully claimed!");
    } catch (e) {
      console.error(e);
      alert(e);
    }
  }



 
   return (
       <div className={cn(styles.container, styleUtils.appear, styleUtils['appear-first'])}>
            <TokenCounter />
               <form className={styles.form}>
                   <div className={styles['form-row']}>
                       <label
                           htmlFor="email-input-field"
                           className={cn(styles['input-label'], {})}
                       >
                           <input
                               className={styles.input}
                               autoComplete="off"
                               type="text"
                               id="email-input-field"
                               placeholder="Enter amount to claim"
                               aria-label="Your token amount"
                               required
                               onChange={(e) => setAmountToClaim(e.target.value)}
                               />
                       </label>
                       <button
                           type="submit"
                           className={cn(styles.submit)}
                           onClick={claim}
                       >
                           Claim
                       </button>
                   </div>
               </form>
           </div>
   );
 }


 

