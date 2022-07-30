import axios from 'axios';
import environment from '~/config/environment';

const axiosInstance = axios.create();

export type RequestOptions = {
  params?: Map<string, string>;
  headers?: Record<string, string | number | boolean>;
};

export const get = async <T>(
  url: string,
  options?: RequestOptions
): Promise<T> => {
  const response = await axiosInstance.get<T>(`${environment.apiUrl}/${url}`, {
    params: Object.fromEntries(options?.params ?? []),
    headers: options?.headers,
  });
  return response.data;
};

export const post = async <T>(
  url: string,
  data?: T,
  options?: RequestOptions
): Promise<void> => {
  await axiosInstance.post<T, void>(`${environment.apiUrl}/${url}`, data, {
    params: Object.fromEntries(options?.params ?? []),
    headers: options?.headers,
  });
};

export default {
  get,
  post,
};
