import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from './axiosBaseQuery';
import { store } from '../store';

export type CatsRequest = {
  page?: number;
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
      query: (args) => ({ url: `/images/search`, method: 'get', data: undefined, params: { ...args, limit: 5 } }),
    }),
  }),
})

export const infinite = (size: number) => {
  return [...Array(size)].map((_, i) => i + 1).map((page) => {
    return api.endpoints.listCats.select({ page })(store.getState()).data
  }).flat();
}

export const { useListCatsQuery } = api
