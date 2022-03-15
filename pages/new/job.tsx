import React from 'react';
import { useFormik } from 'formik';
import { jobQueries } from '../../services/faunadb';
import moment from 'moment';
import { useRouter } from 'next/router';

const CreateJob = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      id: '',
      title: '',
      name: '',
      email: '',
      phoneNumber: '',
      number: null,
      street: '',
      city: '',
      zipCode: null,
      completed: false,
      description: '',
      price: null,
      time: '',
      createdAt: moment.now(),
    },
    onSubmit: async (values) => {
      await jobQueries.createJob(values)
        .then(router.push('/'));
    },
  });

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
        className='placeholder:text-primary mb-2 rounded-lg p-2 placeholder:italic'
        placeholder='Job Title'
      />
      <textarea
        id='description'
        rows={3}
        cols={30}
        onChange={formik.handleChange}
        className='placeholder:text-primary mb-2 w-full rounded-lg p-2 placeholder:italic focus:outline-none focus:ring focus:ring-violet-500'
        placeholder='Job Description'
      />
      <input
        id='price'
        type='number'
        onChange={formik.handleChange}
        className='placeholder:text-primary mb-2 rounded-lg p-2 placeholder:italic'
        placeholder='Job Price'
      />
      <input
        id='time'
        type='datetime-local'
        onChange={formik.handleChange}
        className='mx-auto mb-4 rounded-lg bg-white p-2'
      />
      <p className='py-2 text-center text-xl'>Customer Details</p>
      <input
        id='name'
        onChange={formik.handleChange}
        className='placeholder:text-primary mb-2 rounded-lg p-2 placeholder:italic'
        placeholder='Full Name'
      />
      <input
        id='email'
        type='email'
        onChange={formik.handleChange}
        className='placeholder:text-primary mb-2 rounded-lg p-2 placeholder:italic'
        placeholder='Email'
      />
      <input
        id='phoneNumber'
        type='tel'
        onChange={formik.handleChange}
        className='placeholder:text-primary rounded-lg p-2 placeholder:italic'
        placeholder='Phone Number'
      />
      <label className='pt-4 pb-2 text-xl' htmlFor='number'>
        Address
      </label>
      <div className='flex flex-row'>
        <input
          id='number'
          type='number'
          onChange={formik.handleChange}
          className='placeholder:text-primary mr-2 w-12 rounded-lg p-2 placeholder:italic'
          placeholder='#'
        />
        <input
          id='street'
          type='text'
          onChange={formik.handleChange}
          className='placeholder:text-primary mr-2 w-60 rounded-lg p-2 placeholder:italic'
          placeholder='Street'
        />
      </div>
      <div className=''>
        <input
          id='city'
          type='text'
          onChange={formik.handleChange}
          className='placeholder:text-primary mr-2 w-36 rounded-lg p-2 placeholder:italic'
          placeholder='City'
        />
        <input
          id='zipCode'
          type='number'
          onChange={formik.handleChange}
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

export default CreateJob;
