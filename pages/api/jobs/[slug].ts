import type { NextApiRequest, NextApiResponse } from 'next';
import { JobInterface } from '../../../index.dev';
import faunadb from 'faunadb';
import { flattenData } from '../../../services/faunadb/flattenData';

const { Get, Ref, Collection } = faunadb.query;

const client = new faunadb.Client({
  domain: 'db.fauna.com',
  scheme: 'https',
  secret: process.env.NEXT_PUBLIC_FAUNADB_KEY,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default async (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { slug } = req.query;
  const data: JobInterface = await client.query(
    Get(Ref(Collection('Jobs'), slug))
  );
  res.send(flattenData(data));
};
