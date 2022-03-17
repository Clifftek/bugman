import Head from 'next/head';
import { Header, JobFeed, TermiteSystems } from '../components';

const Home = () => {
  return (
    <div className='lg:mx-auto lg:px-4'>
      <Head>
        <title>Bugman</title>
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-8'>
        <div className='col-span-1 lg:col-span-8'>
          <Header />
          <JobFeed />
        </div>
        <div className='hidden lg:col-span-4 lg:block'>
          <TermiteSystems />
        </div>
      </div>
    </div>
  );
};

export default Home;
