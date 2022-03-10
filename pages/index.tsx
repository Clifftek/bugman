import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Customers, JobPreview, TermiteSystems } from '../components';
import faunaQueries from '../services/faunadb';

export default function Home() {
  return (
    <div className='mb-8 p-1 lg:container lg:mx-auto lg:mb-8 lg:px-10'>
      <Head>
        <title>Bugman</title>
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-8'>
        <div className='col-span-1 lg:col-span-8'>
          <JobPreview />
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <TermiteSystems />
          <Customers />
        </div>
      </div>
    </div>
  );
}