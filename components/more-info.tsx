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

import styles from './more-info.module.css'

export default function MoreInfo() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <a href="https://etherscan.io/tx/0xa9d1e20bbb31e69982e5c74e09cb1cb60ef9aafa8c9aca7df4bdffe7b9381fef" className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
          >
            <h2>Smart Contract &rarr;</h2>
            <p>Find in-depth information about Izzzy contract and audit.</p>
         </a>

          <a href="https://www.linkedin.com/company/izzzy" className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
          >
            <h2>LinkedIn &rarr;</h2>
            <p>Learn about Izzzy in the largest professional networking app!</p>
          </a>

          <a
            href="https://github.com/izzzy-xyz" className={styles.card} 
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Source Code &rarr;</h2>
            <p>Contribute to the GitHub open source community, review code.</p>
          </a>

          <a
            href="https://polygonscan.com/token/0xA198c90fd67c5d3e96C830a18705C8705F3ae3b0" className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Token &rarr;</h2>
            <p>
              Instantly access to exclusive Izzzy community token.
            </p>
          </a>
          <a
            href="https://drive.google.com/file/d/1cXPnMUF3pBui7Obw6OiV87V8YVNZRb-N/view?usp=sharing" className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Whitepaper &rarr;</h2>
            <p>
              Document that explains released purpose of the project.
            </p>
          </a>
          <a
            href="https://foundico.com/ico/izzzy.html" className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>ICO Score &rarr;</h2>
            <p>
              Foundico.com semi-automatic quality score for ICO.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}