import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Header, JobFeed, TermiteSystems } from '../components';
import { JobInterface } from '../index.dev';
import jobQueries from '../services/faunadb/JobsQueryManager.ts';

type Props = {
  jobs: JobInterface[];
};

const Home = ({ jobs }: Props) => {
  return (
    <div className='lg:mx-auto lg:px-4'>
      <Head>
        <title>Bugman</title>
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-8'>
        <div className='col-span-1 lg:col-span-8'>
          <Header />
          <JobFeed jobs={jobs} />
        </div>
        <div className='hidden lg:col-span-4 lg:block'>
          <TermiteSystems />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: jobs } = await jobQueries.getUncompletedJobs();
    return {
      props: {
        jobs,
      },
    };
  } catch (error) {
    return {
      props: {
        data: [],
      },
    };
  }
};

export default Home;
