import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { JobPreview, Loader } from '../../components';
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
  jobs: JobInterface[]
};

const JobCard = ({ job, jobs }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className='grid-cols-1 lg:container lg:mx-auto lg:grid lg:grid-cols-12 lg:gap-8'>
      <div className='color-primary col-span-1 mx-2 mb-2 overflow-auto rounded p-2 lg:col-span-8'>
        <div className='flex w-full items-center justify-end'>
          <div className='mb-2 rounded bg-neutral-200 p-2'>
            <button
              type='button'
              className='mr-1 rounded bg-red-500 p-2 lg:p-4'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                viewBox='0 0 325.284 325.284'
                xmlSpace='preserve'
                className='h-8 w-8 text-slate-900'
                fill='currentColor'
              >
                {trashcanSVG()}
              </svg>
            </button>
            <button type='button' className='rounded bg-yellow-500 p-2 lg:p-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                viewBox='0 0 64 64'
                enableBackground='new 0 0 64 64'
                xmlSpace='preserve'
                className='h-8 w-8 text-slate-900'
                fill='currentColor'
              >
                {pencilSVG()}
              </svg>
            </button>
          </div>
        </div>
        <div className='text-normal my-3 w-full'>
          <p className='pl-4 text-4xl font-semibold lg:pl-0 lg:text-center'>{job.title}</p>
          <p className='pl-4 text-xl font-semibold lg:pl-0 lg:text-center'>
            @ {job.customer.address.streetAddress}, {job.customer.address.city}
          </p>
          <div className='my-2 mx-6 border-b' />
          <p className='text-secondary mt-6 mb-2 text-3xl lg:text-4xl font-semibold'>
            Customer Details:
          </p>
          <p className='pl-4 pb-2 text-xl font-semibold'>{job.customer.name}</p>
          <p className='pl-4 pb-2 text-xl font-semibold'>
            {job.customer.email}
          </p>
          <p className='pl-4 pb-2 text-xl font-semibold'>
            {job.customer.phoneNumber}
          </p>
          <p className='text-secondary my-2 text-3xl font-semibold lg:text-4xl'>
            Job Details:
          </p>
          <p className='pl-4 pb-2 text-xl font-semibold'>{job.title}</p>
          <p className='pl-4 pb-2 text-xl font-semibold'>
            {job.completed.toString()}
          </p>
          <p className='pl-4 pb-2 text-xl font-semibold'>
            Quoted: ${job.price}
          </p>
          <p className='text-secondary my-2 text-3xl font-semibold lg:text-4xl'>
            Notes:
          </p>
          <p className='pb-4 p-8 text-xl font-semibold'>{job.description}</p>
          <textarea
            className='mb-2 w-full rounded p-2'
            cols={30}
            rows={10}
            placeholder='Add Notes....'
          ></textarea>
        </div>
      </div>
      <div className='color-primary col-span-1 mb-2 hidden rounded lg:col-span-4 lg:block'>
        <JobPreview jobs={jobs} />
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
