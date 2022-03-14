import Image from 'next/image';
import React from 'react';
import { JobInterface } from '../../index.dev';
import { addIcon } from '../../utils';
import Job from '../job/Job';

type Props = {
  jobs: JobInterface[];
};

const JobFeed = ({ jobs }: Props) => {
  return (
    <>
      <div className='color-primary flex w-full items-center justify-between p-3'>
        <p className='text-xl text-secondary font-semibold'>Jobs</p>
        <Image
          src='/icon-192x192.png'
          alt='bugman logo'
          className=''
          height='38px'
          width='43px'
        />
        <button type='button' className='rounded p-0.5 lg:p-2'>
          <p className='text-secondary px-2 text-3xl font-semibold'>
            <svg viewBox='0 0 52 52' fill='currentColor' className='h-8 w-8 '>
              {addIcon()}
            </svg>
          </p>
        </button>
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
