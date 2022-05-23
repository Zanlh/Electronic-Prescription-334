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

export function apiDoctorLogin({ email, password }) {
  return post('/doctor-login', {
    email,
    password
  })
}

export function apiDoctorSignup({ name, email, password }) {
  return post('/doctor-register', {
    name,
    email,
    password
  })
}

export function apiPharLogin({ email, password }) {
  return post('/pharmacy-login', {
    email,
    password,
  })
}