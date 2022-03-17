import React from 'react';
import { useFormik } from 'formik';
import { jobQueries } from '../../../services/faunadb';
import { useRouter } from 'next/router';
import useSWR, { SWRResponse } from 'swr';
import { ErrorMessage, Loader } from '../../../components';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const UpdateJob = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data, error }: SWRResponse = useSWR(
    slug ? `/api/jobs/${slug}` : null,
    fetcher
  );
  
  const formik = useFormik({
    initialValues: {
      ...data,
    },
    onSubmit: async (values) => {
      await jobQueries
        .updateJob(values, data.id)
        .then(() => router.replace(`/jobs/${data.id}`));
    },
  });

  if (router.isFallback) {
    return <Loader />;
  }

  if (error) return <ErrorMessage />;

  return (
    <form
      onSubmit={formik.handleSubmit}
      className='mx-auto flex h-full w-80 flex-col justify-center'
    >
      <p className='py-2 text-center text-xl'>Job Details</p>
      <input
        id='title'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.title}
        className='placeholder:text-primary mb-2 rounded-lg p-2 placeholder:italic'
        placeholder='Job Title'
      />
      <textarea
        id='description'
        rows={3}
        cols={30}
        onChange={formik.handleChange}
        value={formik.values.description}
        className='placeholder:text-primary mb-2 w-full rounded-lg p-2 placeholder:italic focus:outline-none focus:ring focus:ring-violet-500'
        placeholder='Job Description'
      />
      <input
        id='price'
        type='number'
        onChange={formik.handleChange}
        value={formik.values.price}
        className='placeholder:text-primary mb-2 rounded-lg p-2 placeholder:italic'
        placeholder='Job Price'
      />
      <input
        id='time'
        type='datetime-local'
        onChange={formik.handleChange}
        value={formik.values.time}
        className='mx-auto mb-4 rounded-lg bg-white p-3'
      />
      <p className='py-2 text-center text-xl'>Customer Details</p>
      <input
        id='name'
        onChange={formik.handleChange}
        value={formik.values.name}
        className='placeholder:text-primary mb-2 rounded-lg p-2 placeholder:italic'
        placeholder='Full Name'
      />
      <input
        id='email'
        type='email'
        onChange={formik.handleChange}
        value={formik.values.email}
        className='placeholder:text-primary mb-2 rounded-lg p-2 placeholder:italic'
        placeholder='Email'
      />
      <input
        id='phoneNumber'
        type='tel'
        onChange={formik.handleChange}
        value={formik.values.phoneNumber}
        className='placeholder:text-primary rounded-lg p-2 placeholder:italic'
        placeholder='Phone Number'
      />
      <label className='pt-4 pb-2 text-xl text-center' htmlFor='number'>
        Address
      </label>
      <div className='flex flex-row'>
        <input
          id='number'
          type='number'
          onChange={formik.handleChange}
          value={formik.values.number}
          className='placeholder:text-primary mr-2 w-12 rounded-lg p-2 placeholder:italic'
          placeholder='#'
        />
        <input
          id='unitNumber'
          type='unitNumber'
          onChange={formik.handleChange}
          value={formik.values.unitNumber}
          className='placeholder:text-primary mr-2 w-12 rounded-lg p-2 placeholder:italic'
          placeholder='#'
        />
        <input
          id='street'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.street}
          className='placeholder:text-primary mr-2 w-60 rounded-lg p-2 placeholder:italic'
          placeholder='Street'
        />
      </div>
      <div className=''>
        <input
          id='city'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.city}
          className='placeholder:text-primary mr-2 w-36 rounded-lg p-2 placeholder:italic'
          placeholder='City'
        />
        <input
          id='zipCode'
          type='number'
          onChange={formik.handleChange}
          value={formik.values.zipCode}
          className='placeholder:text-primary mt-2 w-20 rounded-lg p-2 placeholder:italic'
          placeholder='Zip'
        />
      </div>
      <button
        type='submit'
        className='mx-auto my-4 w-40 rounded-full border-2 border-violet-500 bg-violet-300 py-1 text-lg'
      >
        Submit
      </button>
    </form>
  );
};

export default UpdateJob;
