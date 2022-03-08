import Link from 'next/link';
import React from 'react';
import { JobInterface } from '../../index.dev';
import Job from '../job/Job';

type Props = {
  jobs: JobInterface[];
};

const JobPreview = () => {
  return (
    <div className='mb-8 w-full h-[75vh] rounded bg-white p-2 lg:mb-0 overflow-auto'>
      <div className='w-full overflow-auto rounded'>
        <div className='flex w-full justify-between bg-white px-4'>
          <p className='text-primary self-center text-4xl font-semibold'>
            Jobs
          </p>
          <div className='grid grid-cols-2 rounded-lg bg-neutral-300/30 align-middle'>
            <button className='border-r border-r-slate-300 p-2'>
              <svg
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                fill='currentColor'
                className='h-7 w-7 text-red-500'
              >
                <g>
                  <g>
                    <path d='M3.99649162,13 L20,13 C20.5522847,13 21,12.5522847 21,12 C21,11.4477153 20.5522847,11 20,11 L3.99649162,11 C3.44420687,11 2.99649162,11.4477153 2.99649162,12 C2.99649162,12.5522847 3.44420687,13 3.99649162,13 Z' />
                  </g>
                </g>
              </svg>
            </button>
            <button className='p-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                viewBox='0 0 492 492'
                xmlSpace='preserve'
                className='h-5 w-5 text-green-600'
                fill='currentColor'
              >
                <g>
                  <g>
                    <path
                      d='M465.064,207.566l0.028,0H284.436V27.25c0-14.84-12.016-27.248-26.856-27.248h-23.116
			c-14.836,0-26.904,12.408-26.904,27.248v180.316H26.908c-14.832,0-26.908,12-26.908,26.844v23.248
			c0,14.832,12.072,26.78,26.908,26.78h180.656v180.968c0,14.832,12.064,26.592,26.904,26.592h23.116
			c14.84,0,26.856-11.764,26.856-26.592V284.438h180.624c14.84,0,26.936-11.952,26.936-26.78V234.41
			C492,219.566,479.904,207.566,465.064,207.566z'
                    />
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className='mt-2 w-full border-t border-slate-900'>
          {jobs.map((job: JobInterface) => (
            <Link key={job.id} href={`/jobs/${job.id}`}>
              <Job job={job} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobPreview;

const jobs = [
  {
    id: 1,
    title: 'Spider Spray',
    customer: {
      name: 'John Citizen',
      phoneNumber: '0487 323 432',
      email: 'John@gmail.com',
      address: {
        streetAddress: '3/23 something st',
        city: 'Parkes',
        zipCode: 2870
      }
    },
    completed: false,
    description:
      'Inside and out. Give her a call 10 mins before, and she will come let you in.',
    price: 250.0,
  },
  {
    id: 2,
    title: 'Bedbugs',
    customer: {
      name: 'Will Smith',
      phoneNumber: '0487 323 432',
      email: 'John@gmail.com',
      address: {
        streetAddress: '3/23 something st',
        city: 'Parkes',
        zipCode: 2870
      }
    },
    completed: false,
    description: 
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum corrupti illum consequatur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum corrupti illum consequatur.',
    price: 450.0,
  },
  {
    id: 3,
    title: 'Rodent baiting',
    customer: {
      name: 'Bob Down',
      phoneNumber: '0487 323 432',
      email: 'John@gmail.com',
      address: {
        streetAddress: '3/23 something st',
        city: 'Parkes',
        zipCode: 2870
      }
    },
    completed: false,
    description: 
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum corrupti illum consequatur.',
    price: 150.0,
  },
  {
    id: 4,
    title: 'Bees',
    customer: {
      name: 'Sarah Citizen',
      phoneNumber: '0487 323 432',
      email: 'John@gmail.com',
      address: {
        streetAddress: '3/23 something st',
        city: 'Parkes',
        zipCode: 2870
      }
    },
    completed: false,
    description: 
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum corrupti illum consequatur.',
    price: 1250.0,
  },
];
