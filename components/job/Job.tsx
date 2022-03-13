import React, { useState } from 'react';
import { JobInterface } from '../../index.dev';

type Props = {
  job: JobInterface;
};

const Job = ({ job }: Props) => {
  const [jobDone, setJobDone] = useState<boolean>(false);

  return (
    <div className='h-[7rem] cursor-pointer overflow-hidden bg-neutral-200 p-1 border-t border border-neutral-300'>
      <div className='grid grid-cols-2'>
        <div className='lg:flex lg:items-center lg:justify-between'>
          <p className='text-lg'>{job.title}</p>
          <p className=''>{job.customer.name}</p>
          <p>{job.customer.phoneNumber}</p>
        </div>
        <div className='form-check form-switch lg:justify-self-end pr-2'>
          {!jobDone ? (
            <label
              className='form-check-label inline-block text-red-500 pl-2'
              htmlFor='jobComplete'
            >
              Uncompleted
              <br />
              <span className='pt-2'>Quoted: ${job.price}</span>
            </label>
          ) : (
            <label
              className='form-check-label inline-block pl-2 text-green-500'
              htmlFor='jobComplete'
            >
              Completed
              <br />
              <span className='pt-2'>Paid: ${job.price}</span>
            </label>
          )}
          <input
            type='checkbox'
            role='switch'
            name='jobComplete'
            className='switch'
            onClick={() => setJobDone(!jobDone)}
          />
        </div>
      </div>
      <div className=''>
        <p className=''>
          {job.customer.address.streetAddress}, {job.customer.address.city},{' '}
          {job.customer.address.zipCode}
        </p>
      </div>
      <div className='hidden w-full lg:block'>
        <p className=''>{job.description}</p>
      </div>
    </div>
  );
};

export default Job;
