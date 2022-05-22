import { get, post } from '../utils/fetchApi';

export function apiGetUserInfo({ token }) {
  return get('/profile', {
    Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Headers': '*',
  })
}