/* eslint-disable @typescript-eslint/no-explicit-any */
import faunadb from 'faunadb';
import { JobInterface } from '../../index.dev';
import { flattenData } from './flattenData';

const {
  Collection,
  Update,
  Ref,
  Create,
  Delete,
  Map,
  Paginate,
  Documents,
  Lambda,
  Get,
  Var,
} = faunadb.query;

class QueryManager {
  client: any

  constructor() {
    this.client = new faunadb.Client({
      domain: 'db.fauna.com',
      scheme: 'https',
      secret: process.env.NEXT_PUBLIC_FAUNADB_KEY,
    });
  }

  getAllJobs() {
    return this.client
      .query(
        Map(
          Paginate(Documents(Collection('Jobs'))),
          Lambda('ref', Get(Var('ref')))
        )
      )
      .then((res: any) => flattenData(res))
      .catch((error: any) => error);
  }

  async createJob(data: JobInterface) {
    await this.client
      .query(Create(Collection('Jobs'), { data }))
      .then((res: any) => flattenData(res))
      .catch((error: any) => error);
  }

  async updateJob(data: JobInterface, id: string) {
    await this.client
      .query(
        Update(Ref(Collection('Jobs'), id), {
          data,
        })
      )
      .catch((error: any) => error);
  }

  async completeJob(id: string, value: boolean) {
    await this.client
      .query(
        Update(Ref(Collection('Jobs'), id), {
          data: { completed: value },
        })
      )
      .catch((error: any) => error);
  }

  async deleteJob(id: string) {
    await this.client
      .query(Delete(Ref(Collection('Jobs'), id)))
      .catch((error: any) => error);
  }
}

const jobQueries = new QueryManager();
export default jobQueries;
