import { get, post } from '../utils/fetchApi';

export function apiGetUserInfo({ token }) {
  return get('http://electronic-prescription-system.herokuapp.com/api/profile', {
    Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Headers': '*',
  })
}