/**
 * Copyright 2020 Widgetbot Inc.
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

import * as React from 'react';
import WidgetBot from '@widgetbot/react-embed';
import styles from './index.module.css';

const DiscordWidget = () => (
  <WidgetBot
    className={styles.container}
    server="965489996343685180"
    channel="965489996792467526"
  />
)

export default DiscordWidget