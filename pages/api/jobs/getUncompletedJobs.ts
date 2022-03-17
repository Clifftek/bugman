import type { NextApiRequest, NextApiResponse } from 'next';
import { JobInterface } from '../../../index.dev';
import faunadb from 'faunadb';
import { flattenData } from '../../../services/faunadb/flattenData';

const {
  Paginate,
  Get,
  Map,
  Lambda,
  Var,
  Match,
  Index,
} = faunadb.query;

const client = new faunadb.Client({
  domain: 'db.fauna.com',
  scheme: 'https',
  secret: process.env.NEXT_PUBLIC_FAUNADB_KEY,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default async (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _req: NextApiRequest,
  res: NextApiResponse
) => {
  const data: JobInterface = await client
    .query(
      Map(
        Paginate(Match(Index('uncompleted_jobs'), false)),
        Lambda('ref', Get(Var('ref')))
      )
    );

  res.send(flattenData(data));
};
