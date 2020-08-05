import { Http } from '@/services';

type RegisterParams = {
  email: string;
  password: string;
};

export function register(params: RegisterParams) {
  return Http.rest({
    method: 'post',
    url: 'api/auth/register',
    params
  });
}
