import ax from 'axios';
import { API } from '../constants';

const instance = ax.create({
  baseURL: API.baseUrl,
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

export const axios = instance;

export const extractApiErrorMessage = (err: any) => {
  return `${err?.message}: ${err?.response?.data?.message}`;
};
