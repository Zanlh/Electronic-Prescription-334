import { get, post } from '../utils/fetchApi';

export function apiUserMedicine({ token }) {
  return get('/medicine', {
    Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Headers': '*',
  })
}

export function apiCreateUserMedication({ token, name, description }) {
  return post('/store-medicine', {
    name,
    description,
  }, {
    Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Headers': '*',
  })
}

export function apiDoctorMedicine({ token, id }) {
  return get(`/get-medicines/${id}`, {
    Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Headers': '*',
  })
}