import {
  faPencil,
  faPlus,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from 'formik';
import moment from 'moment';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { MouseEvent } from 'react';
import { JobFeed, Loader } from '../../components';
import { JobInterface } from '../../index.dev';
import { jobQueries } from '../../services/faunadb';

type Props = {
  job: JobInterface;
  jobs: JobInterface[];
};

const JobCard = ({ job, jobs }: Props) => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      ...job
    },
    onSubmit: async (values) => {
      await jobQueries
        .updateJob(values, job.id)
        .then(router.push('/'));
    },
  });

  const handleDelete = async (event: MouseEvent) => {
    event.preventDefault();

    await jobQueries.deleteJob(job.id).then(router.push('/'));
  };

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className='grid-cols-1 lg:mx-4 lg:grid lg:grid-cols-12 lg:gap-8 lg:rounded'>
      <div className='col-span-1 overflow-auto bg-neutral-200 p-2 lg:col-span-8'>
        <div className='mt-1 flex w-full items-center justify-end'>
          <button
            type='button'
            className='mr-1 p-2'
            onClick={(e) => handleDelete(e)}
          >
            <FontAwesomeIcon
              icon={faTrashCan}
              className='text-red-500'
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore
              size="xl"
            />
          </button>
          <button type='button' className=' p-2'>
            <Link href={`/update/job/${job.id}`}>
              <span>
                <FontAwesomeIcon
                  icon={faPencil}
                  className='text-yellow-500'
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  size='xl'
                />
              </span>
            </Link>
          </button>
        </div>

        <div className='mb-4 p-2'>
          <div className='text-primary mb-3 w-full text-xl lg:text-center'>
            <p className='text-3xl'>{job.title}</p>
            <p className=''>
              @ {job.number} {job.street}, {job.city}
            </p>
          </div>

          <div className='my-3 flex w-full flex-col lg:text-center'>
            <p className='text-normal mx-8 mb-4 border-b-2 border-neutral-300 text-center text-xl'>
              Customer Details
            </p>
            <button
              type='button'
              className='text-secondary mr-4 self-end font-semibold'
            >
              <Link href='/new/customer'>
                <span>
                  <FontAwesomeIcon
                    icon={faPlus}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
                    size='xl' />
                </span>
              </Link>
            </button>
            <p className=''>{job.name}</p>
            <p className=''>{job.email}</p>
            <p className=''>{job.phoneNumber}</p>
            <p className=''>
              {job.number} {job.street}, {job.city}, {job.zipCode}
            </p>
          </div>

          <p className='text-normal mx-8 mb-4 border-b-2 border-neutral-300 text-center text-xl'>
            Job Details
          </p>
          <div className='my-3 grid w-full grid-cols-2 lg:text-center'>
            <div className='w-80'>
              <p className=''>{job.title}</p>
              <p className=''>Price: ${job.price}</p>
              <p className=''>
                {moment(job.time).format('DD/MMM/YYYY - hh:mm a')}
              </p>
            </div>
            <div className='w-20'>
              <p className='text-center'>{job.completed.toString()}</p>
            </div>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className=' flex w-full flex-col lg:text-center'
          >
            <p className='text-normal mx-8 mb-4 border-b-2 border-neutral-300 text-center text-xl'>
              Notes
            </p>
            <textarea
              id='description'
              className='text-primary mt-2 mb-4 w-full rounded-lg p-2 focus:outline-none focus:ring focus:ring-violet-500'
              cols={30}
              rows={5}
              placeholder='Add Notes....'
              onChange={formik.handleChange}
              value={formik.values.description}
            ></textarea>
            <button
              type='submit'
              className='mx-auto w-40 rounded-full border-2 border-violet-500 bg-violet-300 py-1 text-lg'
            >
              Save Notes
            </button>
          </form>
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
