import { get, post } from '../utils/fetchApi';

export function apiGetPrescriptions({ token }) {
  console.log('get api', token);
  return get('/prescription', {
      Authorization: `Bearer ${token}`,
      'Access-Control-Allow-Headers': '*',
  })
}