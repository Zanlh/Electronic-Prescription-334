import * as ROUTES from '../../routes/paths';

export const LOGIN_SIGNUP = [
  {
    path: ROUTES.LOGIN,
    content: 'Login',
  },
  {
    path: ROUTES.SIGNUP,
    content: 'Signup'
  }
]

export const USER_PRESCRIPTION = [
  {
    path: ROUTES.USER_PRESCRIPTION,
    content: 'My prescriptions',
  },
  {
    path: ROUTES.PRESCRIPTIONHISTORY,
    content: 'Prescription history',
  },
  {
    path: ROUTES.USER_TREATMANT,
    content: 'Treatment plans',
  },
  {
    path: ROUTES.USER_MEDICATION,
    content: 'Medications',
  },
  {
    path: ROUTES.TOKEN,
    content: 'Token',
  },
]