import { BaseQueryFn } from '@reduxjs/toolkit/dist/query/react';
import { AxiosError, AxiosRequestConfig } from 'axios';
import axios from '../lib/apiClient';

export const axiosBaseQuery = (
  { baseUrl }: { baseUrl: string } = { baseUrl: '' },
): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
    },
    unknown,
    unknown
    > => async ({
  url, method, data, params,
}) => {
  try {
    const result = await axios({
      url: baseUrl + url, method, data, params,
    });
    return { data: result.data };

  } catch (axiosError) {
    const err = axiosError as AxiosError;
    return {
      error: { status: err.response?.status, data: err.response?.data },
    };
  }
};
