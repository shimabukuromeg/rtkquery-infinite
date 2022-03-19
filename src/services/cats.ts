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
    // NOTE: さらに読み込むボタンを押したときに無限ロードするサンプルコード用のエンドポイント
    listCats: build.query<Cat[], CatsRequest>({
      query: (args) => ({ url: `/images/search`, method: 'get', data: undefined, params: { ...args, limit: 5 } }),
    }),
    // NOTE: 無限スクロール用のエンドポイント
    listCatsLimit3: build.query<Cat[], CatsRequest>({
      query: (args) => ({ url: `/images/search`, method: 'get', data: undefined, params: { ...args, limit: 3 } }),
    }),
  }),
})

export const infinite = (currentPage: number) => {
  return [...Array(currentPage)].map((_, i) => i + 1).map((page) => {
    return api.endpoints.listCats.select({ page })(store.getState()).data
  }).flat();
}

export const infiniteScroll = (currentPage: number) => {
  return [...Array(currentPage)].map((_, i) => i + 1).map((page) => {
    return api.endpoints.listCatsLimit3.select({ page })(store.getState()).data
  }).flat();
}

export const { useListCatsQuery, useListCatsLimit3Query } = api
