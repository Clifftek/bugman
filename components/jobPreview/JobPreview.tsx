import React from 'react';
import { JobInterface } from '../../index.dev';
import JobFeed from './JobFeed';
import JobPreviewHeader from './JobPreviewHeader';

type Props = {
  jobs: JobInterface[];
};

const JobPreview = ({ jobs }: Props) => {
  return (
    <>
      <JobPreviewHeader />
      <JobFeed jobs={jobs} />
    </>
  );
};

export default JobPreview;
