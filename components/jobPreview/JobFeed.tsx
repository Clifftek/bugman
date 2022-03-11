import React from 'react'
import { JobInterface } from '../../index.dev';
import Job from '../job/Job';

type Props = {
  jobs: JobInterface[];
};

const JobFeed = ({ jobs }: Props) => {
  return (
    <div className='color-primary mb-4 w-full overflow-auto rounded-b p-2 lg:mb-0'>
        <div className='w-full overflow-auto rounded'>
          <div className='mt-2 w-full'>
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
  )
}

export default JobFeed