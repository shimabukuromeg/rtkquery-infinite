import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from './axiosBaseQuery';

type Order = 'desc' | 'asc' | 'random';

export type CatsRequest = {
  order?: Order;
  page?: number;
  limit?: number;
};

type Cat = {
  id: string;
  url: string;
};


export const api = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? '',
  }),
  endpoints: (build) => ({
    listCats: build.query<Cat[], CatsRequest>({
      query: (args) => ({ url: `/images/search`, method: 'get', data: undefined, params: args }),
    }),
  }),
})

export const { useListCatsQuery } = api
