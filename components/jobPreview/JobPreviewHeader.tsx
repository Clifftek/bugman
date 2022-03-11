import React from 'react';

const JobPreviewHeader = () => {
  return (
    <div className='color-primary flex w-full justify-between rounded-t p-2 px-4'>
      <p className='text-secondary self-center text-4xl font-semibold'>Jobs</p>
      <div className='rounded-lg bg-neutral-200 align-middle shadow-lg'>
        <button type='button' className='bg-neutral-200/[0.80] p-0.5 lg:p-2 rounded'>
          <p className="text-4xl text-secondary font-semibold px-3">&#43;</p>
        </button>
      </div>
    </div>
  );
};

export default JobPreviewHeader;
