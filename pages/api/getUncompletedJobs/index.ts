import type { NextApiRequest, NextApiResponse } from 'next';
import faunadb from 'faunadb';

const { Paginate, Index, Select, Get, Match } = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNA_ADMIN_KEY,
  domain: 'db.fauna.com'
});

const getUncompletedJobs = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const docs = await client.query(
      Paginate(
        Match(
          Index('uncompleted_jobs'),
          Select('ref', Get(Match(Index('uncompleted_jobs'), 'false')))
        )
      )
    );

    res.status(200).json(docs);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default getUncompletedJobs;
