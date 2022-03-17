import {
  faPencil,
  faPlus,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from 'formik';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { MouseEvent } from 'react';
import useSWR, { SWRResponse } from 'swr';
import { ErrorMessage, Loader } from '../../components';
import { jobQueries } from '../../services/faunadb';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const JobCard = () => {
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
      await jobQueries.updateJob(values, data?.id).then(() => router.reload());
    },
  });

  const handleDelete = async (event: MouseEvent) => {
    event.preventDefault();

    await jobQueries.deleteJob(data?.id).then(() => router.replace('/'));
  };

  if (router.isFallback) {
    return <Loader />;
  }

  if (error) return <ErrorMessage />;

  return (
    <div className='grid-cols-1 lg:mx-4 lg:grid lg:grid-cols-12 lg:gap-8 lg:rounded'>
      <div className='col-span-1 overflow-auto bg-neutral-200 p-2 lg:col-span-8'>
        <div className='mt-1 flex w-full items-center justify-end'>
          <button
            type='button'
            className='mr-1 p-2'
            onClick={(e) => handleDelete(e)}
          >
            <FontAwesomeIcon
              icon={faTrashCan}
              className='text-red-500'
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore
              size='xl'
            />
          </button>
          <button type='button' className=' p-2'>
            <Link href={`/update/job/${data?.id}`}>
              <span>
                <FontAwesomeIcon
                  icon={faPencil}
                  className='text-yellow-500'
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  size='xl'
                />
              </span>
            </Link>
          </button>
        </div>

        <div className='mb-4 p-2'>
          <div className='text-primary mb-3 w-full text-xl lg:text-center'>
            <p className='text-3xl'>{data?.title}</p>
            <p className=''>
              @ {data?.number} {data?.street}, {data?.city}
            </p>
          </div>

          <div className='my-3 flex w-full flex-col lg:text-center'>
            <p className='text-normal mx-8 mb-4 border-b-2 border-neutral-300 text-center text-xl'>
              Customer Details
            </p>
            <button
              type='button'
              className='text-secondary mr-4 self-end font-semibold'
            >
              <Link href='/new/customer'>
                <span>
                  <FontAwesomeIcon
                    icon={faPlus}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    size='xl'
                  />
                </span>
              </Link>
            </button>
            <p className=''>{data?.name}</p>
            <p className=''>{data?.email}</p>
            <p className=''>{data?.phoneNumber}</p>
            <p className=''>
              {data?.unitNumber ? `${data?.unitNumber}/` : null}{data?.number} {data?.street}, {data?.city}, {data?.zipCode}
            </p>
          </div>

          <p className='text-normal mx-8 mb-4 border-b-2 border-neutral-300 text-center text-xl'>
            Job Details
          </p>
          <div className='my-3 grid w-full grid-cols-2 lg:text-center'>
            <div className='w-80'>
              <p className=''>{data?.title}</p>
              <p className=''>Price: ${data?.price}</p>
              <p className=''>
                {moment(data?.time).format('DD/MMM/YYYY - hh:mm a')}
              </p>
            </div>
            <div className='w-20'>
              <p className='text-center'>{data?.completed.toString()}</p>
            </div>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className=' flex w-full flex-col lg:text-center'
          >
            <p className='text-normal mx-8 mb-4 border-b-2 border-neutral-300 text-center text-xl'>
              Notes
            </p>
            <textarea
              id='description'
              className='text-primary mt-2 mb-4 w-full rounded-lg p-2 focus:outline-none focus:ring focus:ring-violet-500'
              cols={30}
              rows={5}
              placeholder='Add Notes....'
              onChange={formik.handleChange}
              value={formik.values.description}
            ></textarea>
            <button
              type='submit'
              className='mx-auto w-40 rounded-full border-2 border-violet-500 bg-violet-300 py-1 text-lg'
            >
              Save Notes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
