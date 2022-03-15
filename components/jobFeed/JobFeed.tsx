import React from 'react';
import { JobInterface } from '../../index.dev';
import Job from '../job/Job';

type Props = {
  jobs: JobInterface[];
};

const JobFeed = ({ jobs }: Props) => {
  return (
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
              <p className='text-red-500 text-5xl font-semibold bg-neutral-200 text-center p-6 display-font tracking-wider'>No Jobs Yet</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default JobFeed;
