const USERDATA_KEY = 'userdata';

export type UserType = {
  token: string;
  id: string;
  email: string;
  name: string;
};

export function setUser(data: UserType) {
  localStorage.setItem(USERDATA_KEY, JSON.stringify(data));
}

export function getUser(): UserType {
  const data = localStorage.getItem(USERDATA_KEY);

  return data && JSON.parse(data);
}

export function getToken() {
  const data = getUser();

  return data?.token;
}

export function setToken(token: string) {
  const data = getUser();

  setUser({ ...data, token: `Bearer ${token}` });
}

export function logout() {
  localStorage.removeItem(USERDATA_KEY);
}

export function hasToken() {
  return !!getToken();
}
