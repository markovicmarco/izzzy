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

export const SITE_URL = 'https://izzzy.xyz';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'izzzy_xyz';
export const BRAND_NAME = 'izzzy';
export const SITE_NAME_MULTILINE = ['IZZZY', 'Inc'];
export const SITE_NAME = 'IZZZY Inc';
export const META_NAME = 'NFT';
export const META_DESCRIPTION =
  'Ethereum NFT project. Made through the collaboration of creators, designers, and developers by the crypto community!';
export const SITE_DESCRIPTION =
  'An interactive blockchain online experience by the community.';
export const DATE = '30 June 2022';
export const SHORT_DATE = 'Jun 30 - 9:00am PST';
export const FULL_DATE = 'Jun 30th 9am Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = '/legal';
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const SMART_CONTRACT =
  'https://etherscan.io/tx/0xa9d1e20bbb31e69982e5c74e09cb1cb60ef9aafa8c9aca7df4bdffe7b9381fef';
export const REPO = 'https://twitter.com/izzzy_xyz';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Minting',
    route: '/mint'
  },
  {
    name: 'Izzzy Stage',
    route: '/stage/c'
  },
  {
    name: 'Contributors',
    route: '/contributors'
  },
  {
    name: 'Listing',
    route: '/nfts'
  },
  {
    name: 'Info',
    route: '/info'
  },
  {
    name: 'Pre Ico',
    route: '/drop'
  },
  {
    name: 'Roadmap',
    route: '/roadmap'
  },
  {
    name: 'Discord',
    route: '/discord'
  },
  {
    name: 'Jobs',
    route: '/jobs'
  },
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Expo',
    route: '/expo'
  },
];

export type TicketGenerationState = 'default' | 'loading';
