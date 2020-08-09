import { Session } from '@/services';
import { AuthApi } from '@/domains/auth';

export async function login(params: AuthApi.LoginParams) {
  const res = await AuthApi.login(params);

  if (res.data) {
    Session.setUser(res.data);
  }

  return res.message;
}

export async function register(params: AuthApi.RegisterParams) {
  const res = await AuthApi.register(params);

  if (res.data) {
    Session.setUser(res.data);
  }

  return res.message;
}

export function logout() {
  Session.logout();

  document.location.href = '/';
}
