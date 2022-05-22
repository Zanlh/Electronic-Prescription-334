import { get, post } from '../utils/fetchApi';

export function apiUserSignup({ name, email, password }) {
  return post('/user-register', {
    name,
    email,
    password
  });
}

export function apiUserLogin({ email, password }) {
  return post('/user-login', {
    email,
    password
  })
}