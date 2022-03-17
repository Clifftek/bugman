import React from 'react';
import useSWR, { SWRResponse } from 'swr';
import { JobInterface } from '../../index.dev';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Job from '../job/Job';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const JobFeed = () => {
  const { data, error }: SWRResponse = useSWR(
    '/api/jobs/getUncompletedJobs',
    fetcher
  );

  if (error) return <ErrorMessage />;
  if (!data || data.data.length === 0) {
    return (
      <p className='display-font bg-neutral-200 p-6 text-center text-5xl font-semibold text-red-500'>
        No Jobs Yet
      </p>
    );
  }

  return (
    <div className='color-primary w-full overflow-auto rounded-b lg:mb-0'>
      <div className='w-full overflow-auto'>
        <div className='w-full'>
          {data &&
            data.data.length > 0 &&
            data.data.map((job: JobInterface) => (
              <a key={job.id} href={`/jobs/${job.id}`}>
                <Job job={job} />
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default JobFeed;
