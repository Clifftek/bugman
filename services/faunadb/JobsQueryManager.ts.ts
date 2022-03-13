/* eslint-disable @typescript-eslint/no-explicit-any */
import faunadb from 'faunadb';
import { JobInterface } from '../../index.dev';
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

  getAllJobs() {
    return this.client
      .query()
      .then((res: any) => flattenData(res))
      .catch((error: any) => error);
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

  createJob(data: JobInterface) {
    return this.client
      .query()
      .then((res: any) => flattenData(res))
      .catch((error: any) => error);
  }

  updateJob(data: JobInterface, id: string) {
    return this.client
      .query()
      .then((res: any) => flattenData(res))
      .catch((error: any) => error);
  }

  completeJob(id: string) {
    return this.client
      .query()
      .then((res: any) => flattenData(res))
      .catch((error: any) => error);
  }

  deleteJob(id: string) {
    return this.client
      .query()
      .then((res: any) => flattenData(res))
      .catch((error: any) => error);
  }
}

const jobQueries = new QueryManager();
export default jobQueries;
