import React, { useState } from 'react';
import { JobInterface } from '../../index.dev';

type Props = {
  job: JobInterface;
};

const Job = ({ job }: Props) => {
  const [jobDone, setJobDone] = useState<boolean>(false);

  return (
    <div className='mt-2 h-[7rem] cursor-pointer overflow-hidden rounded bg-neutral-200 p-1'>
      <div className='grid grid-cols-2'>
        <div className='lg:flex lg:items-center lg:justify-between'>
          <p className='text-xl font-semibold'>{job.title}</p>
          <p className='text-lg'>{job.customer.name}</p>
          <p>{job.customer.phoneNumber}</p>
        </div>
        <div className='form-check form-switch lg:justify-self-end pr-2'>
          {!jobDone ? (
            <label
              className='form-check-label inline-block font-semibold text-red-500 pl-2'
              htmlFor='jobComplete'
            >
              Uncompleted
              <br />
              <span className='pt-2'>Quoted: ${job.price}</span>
            </label>
          ) : (
            <label
              className='form-check-label inline-block pl-2 font-semibold text-green-500'
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
        <p className='text-lg'>
          {job.customer.address.streetAddress}, {job.customer.address.city},{' '}
          {job.customer.address.zipCode}
        </p>
      </div>
      <div className='hidden w-full lg:block'>
        <p className='text-lg'>{job.description}</p>
      </div>
    </div>
  );
};

export default Job;
