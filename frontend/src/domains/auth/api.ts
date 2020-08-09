import { Http } from '@/services';

import { RestResponse } from '../entity';

export type AuthResponse = {
  token: string;
  id: string;
  email: string;
  name: string;
};

export type RegisterParams = {
  email: string;
  name: string;
  password: string;
};

export function register(
  params: RegisterParams
): Promise<RestResponse<AuthResponse>> {
  return Http.rest({
    method: 'post',
    url: 'api/auth/register',
    params
  });
}

export type LoginParams = {
  email: string;
  password: string;
};

export function login(
  params: LoginParams
): Promise<RestResponse<AuthResponse>> {
  return Http.rest({
    method: 'post',
    url: 'api/auth/login',
    params
  });
}
