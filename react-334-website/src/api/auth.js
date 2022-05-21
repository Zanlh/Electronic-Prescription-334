import { get, post } from '../utils/fetchApi';

export function apiSignup({ name, email, password }) {
  return post('http://electronic-prescription-system.herokuapp.com/api/user-register', {
    name,
    email,
    password
  });
}

export function apiLogin({ email, password }) {
  return post('http://electronic-prescription-system.herokuapp.com/api/user-login', {
    email,
    password
  })
}