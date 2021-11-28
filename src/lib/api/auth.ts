import client from './client';

export type AuthType = {
  username: string;
  password: string;
};

// login
export const login = ({ username, password }: AuthType) =>
  client.post('/api/auth/login', { username, password });

// register
export const register = ({ username, password }: AuthType) =>
  client.post('/api/auth/register', { username, password });

// login status check
export const check = () => client.get('/api/auth/check');
