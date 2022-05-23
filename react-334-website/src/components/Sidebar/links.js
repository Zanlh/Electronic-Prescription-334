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

export const DOCTOR_FIND = [
  {
    path: ROUTES.DOCTOR_FIND,
    content: 'Find patient',
  }
]

export const DOCTOR_PRESCRIPTION = [
  {
    path: ROUTES.DOCTOR_PRESCRIPTION,
    content: 'Prescription',
  },
  {
    path: ROUTES.DOCTOR_MEDICATION,
    content: 'Medication',
  },
  {
    path: ROUTES.DOCTOR_TREATMENT,
    content: 'Treatment plans',
  }
]

export const PHAR_PRESCRIPTION = [
  {
    path: ROUTES.PHAR_PRESCRIPTION,
    content: 'Prescription',
  }
]