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

 import * as React from 'react'
 import Layout from '@components/layout';
 
 import { META_DESCRIPTION } from '@lib/constants';
 import dynamic from "next/dynamic"

 const DiscordWidget = dynamic(() => import('@components/widgetio'), {
   // Do not import in server side
   ssr: false,
 })
 
 export default function Discord() {
   const meta = {
     title: 'Discord - Talk, chat, hang out, and stay close with community.',
     description: META_DESCRIPTION
   };

 
   return (
      <Layout>
        <DiscordWidget children={meta} />
      </Layout>
   );
 }

 
 
 

function ssr(arg0: string, ssr: any, arg2: boolean): import("next/dynamic").LoaderComponent<{}> {
  throw new Error('Function not implemented.');
}
 