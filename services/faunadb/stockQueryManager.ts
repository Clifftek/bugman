/* eslint-disable @typescript-eslint/no-explicit-any */
import faunadb from 'faunadb';
import { flattenData } from './flattenData';

const {
  Paginate,
  Get,
  Map,
  Collection,
  Documents,
  Update,
  Lambda,
  Var,
  Match,
  Index,
  Ref,
  Create,
  Delete,
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
}

const stockQueries = new QueryManager();
export default stockQueries;