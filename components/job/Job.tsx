import moment from 'moment';
import { useRouter } from 'next/router';
import React from 'react';
import { JobInterface } from '../../index.dev';
import { jobQueries } from '../../services/faunadb';

type Props = {
  job: JobInterface;
};

const Job = ({ job }: Props) => {
  const router = useRouter();
  
  const handleJobCompleted = async () => {
    await jobQueries.completeJob(job.id, !job.completed)
      .then(() => router.reload());
  }

  return (
    <div className='h-20 cursor-pointer overflow-hidden border border-t border-neutral-300 bg-neutral-200 p-1'>
      <div className='grid grid-cols-2'>
        <div className='lg:flex lg:items-center lg:justify-between'>
          <p className='text-lg'>{job.title}</p>
          <p className=''>{job.name}</p>
          <p>{job.phoneNumber}</p>
        </div>
        <div className='form-check form-switch justify-self-end'>
          <div className='text-right'>
            <p>{moment(job.time).format('hh:mm a')}</p>
            <span className='pt-2'>Quoted: ${job.price}</span>
          </div>
          {!job.completed ? (
            <>
              <label
                className='form-check-label inline-block pl-2 text-red-500'
                htmlFor='jobComplete'
              >
                Uncompleted
                <br />
              </label>
              <input
                type='checkbox'
                role='switch'
                name='jobComplete'
                className='switch'
                onChange={() => handleJobCompleted()}
              />
            </>
          ) : (
            <>
              <label
                className='form-check-label inline-block pl-7 text-green-500'
                htmlFor='jobComplete'
              >
                Completed
                <br />
              </label>
              <input
                type='checkbox'
                role='switch'
                name='jobComplete'
                className='switch'
              />
            </>
          )}
        </div>
      </div>
      <div className='hidden w-full lg:block'>
        <p className=''>{job.description}</p>
      </div>
    </div>
  );
};

export default Job;
