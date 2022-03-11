import faunadb from 'faunadb';
import { flattenData } from './flattenData';

const {
  Paginate,
  Get,
  Map,
  Collection,
  Documents,
  Lambda,
  Var,
  Match,
  Index,
  Ref,
} = faunadb.query;

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
    return this.client
      .query(
        Map(
          Paginate(Match(Index('uncompleted_jobs'), false)),
          Lambda('ref', Get(Var('ref')))
        )
      )
      .then((res: any) => flattenData(res))
      .catch((error: any) => error);
  }

  getJobById(id: string) {
    return this.client
      .query(Get(Ref(Collection('Jobs'), id)))
      .then((res: any) => flattenData(res))
      .catch((error: any) => error);
  }
}

const jobQueries = new QueryManager();
export default jobQueries;
