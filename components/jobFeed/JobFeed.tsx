import React from 'react';
import { JobInterface } from '../../index.dev';
import Job from '../job/Job';

type Props = {
  jobs: JobInterface[];
};

const JobFeed = ({ jobs }: Props) => {
  return (
    <>
      <div className='color-primary flex w-full justify-between p-2 px-4'>
        <p className='text-secondary self-center text-2xl font-semibold'>
          Jobs
        </p>
        <div className='align-middle'>
          <button type='button' className='rounded p-0.5 lg:p-2'>
            <p className='text-secondary px-2 text-3xl font-semibold'>&#43;</p>
          </button>
        </div>
      </div>
      <div className='color-primary w-full overflow-auto rounded-b lg:mb-0'>
        <div className='w-full overflow-auto'>
          <div className='w-full'>
            {jobs &&
              jobs.length > 0 &&
              jobs.map((job: JobInterface) => (
                <a key={job.id} href={`/jobs/${job.id}`}>
                  <Job job={job} />
                </a>
              ))}
            {!jobs ||
              (jobs.length === 0 && (
                <p className='text-secondary text-xl'>No Jobs Yet</p>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobFeed;
