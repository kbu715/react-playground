import client from './client';

type DataType = {
  username: string;
  password: string;
};

// login
export const login = ({ username, password }: DataType) =>
  client.post('/api/auth/login', { username, password });

// register
export const register = ({ username, password }: DataType) =>
  client.post('/api/auth/register', { username, password });

// login status check
export const check = () => client.get('/api/auth/check');
