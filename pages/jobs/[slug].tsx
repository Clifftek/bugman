import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { JobFeed, Loader } from '../../components';
import { CustomerInterface, JobInterface } from '../../index.dev';
import { jobQueries } from '../../services/faunadb';
import { pencilSVG, trashcanSVG } from '../../utils';

type Props = {
  job: {
    id: string;
    title: string;
    customer: CustomerInterface;
    completed: boolean;
    description: string;
    price: number;
  };
  jobs: JobInterface[];
};

const JobCard = ({ job, jobs }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className='grid-cols-1 lg:mx-4 lg:grid lg:grid-cols-12 lg:gap-8 lg:rounded'>
      <div className='col-span-1 overflow-auto bg-neutral-200 p-2 lg:col-span-8'>
        <div className='flex w-full items-center justify-end'>
          <button type='button' className='mr-1 p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              viewBox='0 0 325.284 325.284'
              xmlSpace='preserve'
              className='stroke-4 h-7 w-7 fill-red-500 stroke-red-500'
              fill='currentColor'
            >
              {trashcanSVG()}
            </svg>
          </button>
          <button type='button' className='p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              viewBox='0 0 64 64'
              enableBackground='new 0 0 64 64'
              xmlSpace='preserve'
              className='stroke-4 h-7 w-7 fill-yellow-500 stroke-yellow-500'
              fill='currentColor'
            >
              {pencilSVG()}
            </svg>
          </button>
        </div>

        <div className='p-2 border-2 rounded border-violet-500'>

          <div className='text-primary my-3 w-full text-xl lg:text-center'>
            <p className=''>{job.title}</p>
            <p className=''>
              @ {job.customer.address.streetAddress},{' '}
              {job.customer.address.city}
            </p>
          </div>

          <div className='my-3 w-full lg:text-center'>
            <p className='text-normal mx-8 mb-4 border-b-2 border-neutral-300 text-center text-xl'>
              Customer Details
            </p>
            <p className=''>{job.customer.name}</p>
            <p className=''>{job.customer.email}</p>
            <p className=''>{job.customer.phoneNumber}</p>
          </div>

          <div className='my-3 w-full lg:text-center'>
            <p className='text-normal mx-8 mb-4 border-b-2 border-neutral-300 text-center text-xl'>
              Job Details
            </p>
            <p className=''>{job.title}</p>
            <p className=''>{job.completed.toString()}</p>
            <p className=''>Quoted: ${job.price}</p>
          </div>

          <div className='mb-2 w-full lg:text-center'>
            <p className='text-normal mx-8 mb-4 border-b-2 border-neutral-300 text-center text-xl'>
              Notes
            </p>
            <p className=''>{job.description}</p>
            <textarea
              className='rounded-lg w-full p-2 mt-2'
              cols={30}
              rows={10}
              placeholder='Add Notes....'
            ></textarea>
          </div>
        </div>
      </div>
      <div className='color-primary col-span-1 mb-2 hidden rounded lg:col-span-4 lg:block'>
        <JobFeed jobs={jobs} />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  try {
    const job: JobInterface = await jobQueries.getJobById(params.slug);
    const { data: jobs } = await jobQueries.getUncompletedJobs();

    return {
      props: {
        job,
        jobs,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const { data: jobs } = await jobQueries.getUncompletedJobs();

  return {
    paths: jobs.map(({ id }: JobInterface) => ({ params: { slug: id } })),
    fallback: true,
  };
};

export default JobCard;
