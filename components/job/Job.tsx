import React, { useState } from 'react';
import { JobInterface } from '../../index.dev';

type Props = {
  job: JobInterface
}

const Job = ({ job }: Props) => {
  const [jobDone, setJobDone] = useState<boolean>(false);
  console.log(jobDone);

  return (
    <div className="bg-neutral-300/30 mt-2 p-2 h-[15rem] overflow-auto rounded cursor-pointer lg:h-60">
      <div className="flex flex-col text-normal">
        <div className='flex items-center justify-between'>
          <p className="text-2xl pb-2 font-semibold">{job.title}</p>
          <div className='form-check form-switch'>
            {!jobDone ?
              (
                <label
                  className="form-check-label inline-block text-red-500 pl-2 font-semibold"
                  htmlFor='jobComplete'
                >
                  Uncompleted
                </label>
              ) : (
                <label
                  className="form-check-label inline-block text-green-500 pl-2 font-semibold"
                  htmlFor='jobComplete'
                >
                  Completed
                </label>
              )}
            <input
              type='checkbox'
              role='switch'
              name="jobComplete"
              className='switch'
              onClick={() => setJobDone(!jobDone)}
            />
            <p className='pt-2'>Quoted: ${ job.price }</p>
          </div>
        </div>
        <div className="pb-2">
          <p className="text-lg font-semibold">{job.customer.name}</p>
          <p>{job.customer.phoneNumber}</p>
          <p className="text-lg">{job.customer.address.streetAddress}, {job.customer.address.city}, {job.customer.address.zipCode}.
          </p>
        </div>
        <div className="w-full">
          <p className="text-lg">{ job.description }</p>
        </div>
      </div>
    </div>
  );
};

export default Job;
