import type { NextPage } from 'next';
import Head from 'next/head';
import { APP_NAME } from '@/constants';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{APP_NAME}</title>
      </Head>

      <main>
        <h1>{APP_NAME}</h1>
      </main>

      <footer>
        CONFIDENTIAL. &copy; Craft Codery LLC. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
