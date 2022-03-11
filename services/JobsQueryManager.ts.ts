import faunadb from 'faunadb';

const { Paginate, Get, Map, Collection, Documents, Lambda, Var, Match, Index } =
  faunadb.query;

export const flattenData = (obj: any) => {
  if (!obj) return null;

  if (Array.isArray(obj.data)) {
    return {
      ...obj,
      data: obj.data.map((e: any) => flattenData(e)),
    };
  } else {
    return { ...obj.data, id: obj.ref.value.id };
  }
};

class QueryManager {
  client: any;

  constructor() {
    this.client = new faunadb.Client({
      domain: 'db.fauna.com',
      scheme: 'https',
      secret: process.env.NEXT_PUBLIC_FAUNADB_KEY,
    });
  }

  getUncompletedJobs() {
    return this.client.query(
      Map(
        Paginate(Match(Index('uncompleted_jobs'), false)),
        Lambda('ref', Get(Var('ref')))
      )
    ).then((res: any) => flattenData(res));
  }

  getJobById(id: string) {
    return this.client.query();
  }
}

const jobQueries = new QueryManager();
export default jobQueries;
