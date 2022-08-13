import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Card from '@/components/Card';
import { APP_NAME } from '@/constants';

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <Head>
        <title>{APP_NAME}</title>
      </Head>

      <div className="min-h-screen flex flex-col">
        <header className="md:flex md:items-center md:justify-between py-4">
          <div className="flex-1 min-w-0 md:flex md:items-center">
            <Image src="/logo.png" width={175} height={50} alt="Craft Codery" />
            <h1 className="pl-2 mt-2 md:pl-4 md:mt-0 text-2xl font-bold leading-7 text-brand-blue uppercase sm:text-3xl sm:tracking-wide">
              {APP_NAME}
            </h1>
          </div>
        </header>

        <main className="flex-1 py-4">
          <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            Project Statuses
          </h2>

          <Card></Card>
        </main>

        <footer className="py-4">
          <p className="text-sm text-gray-900 text-center">
            &copy; Craft Codery LLC. All rights reserved. CONFIDENTIAL.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
