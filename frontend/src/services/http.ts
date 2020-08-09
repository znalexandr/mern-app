import axios, { AxiosRequestConfig } from 'axios';

import { Session } from '@/services';

const BASE_URL = '//localhost:5000/';

export async function request(config: AxiosRequestConfig) {
  return axios.request(config);
}

export async function baseRestRequest(config: AxiosRequestConfig) {
  const response = await axios({
    baseURL: BASE_URL,
    ...config
  });

  return response.data;
}

function getHeaders() {
  const headers: any = { 'Content-Type': 'application/json' };
  const token = Session.getToken();

  if (token) {
    headers.Authorization = token;
  }

  return headers;
}

function handleAuthError() {
  Session.logout();
}

export async function rest(config: AxiosRequestConfig) {
  try {
    const req = {
      ...config,
      baseURL: BASE_URL,
      headers: getHeaders(),
      data: JSON.stringify(config.params)
    };

    const response = await axios(req);

    return response.data;
  } catch (error) {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      handleAuthError();
    } else throw error;
  }
}

export async function restFull(config: AxiosRequestConfig) {
  try {
    return await axios({
      baseURL: BASE_URL,
      headers: getHeaders(),
      ...config
    });
  } catch (error) {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      handleAuthError();
    } else throw error;
  }
}
