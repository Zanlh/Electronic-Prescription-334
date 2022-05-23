import * as ROUTES from './paths';

import HomePage from '../pages/HomePage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import TokenPage from '../pages/TokenPage';
import Prescription from '../pages/Prescription';
import TreatmentPlan from '../pages/TreatmentPlan';
import Medication from '../pages/Medication';
import PrescriptionDetail from '../pages/PrescriptionDetail';

import Find from '../pages/Find';

const ROUTES_DETAILS = [
  {
    path: ROUTES.HOMEPAGE,
    exact: true,
    element: <HomePage />,
  },
  {
    path: ROUTES.SIGNUP,
    exact: true,
    element: <SignupPage />,
  },
  {
    path: ROUTES.LOGIN,
    exact: true,
    element: <LoginPage />
  },
  {
    path: ROUTES.TOKEN,
    exact: true,
    element: <TokenPage />
  },
  {
    path: ROUTES.USER_PRESCRIPTION,
    exact: true,
    element: <Prescription />
  },
  {
    path: ROUTES.USER_TREATMANT,
    exact: true,
    element: <TreatmentPlan />
  },
  {
    path: ROUTES.USER_MEDICATION,
    exact: true,
    element: <Medication />
  },
  {
    path: ROUTES.USER_PRESCRIPTION_DETAIL,
    exact: true,
    element: <PrescriptionDetail />
  },
  {
    path: ROUTES.DOCTOR_FIND,
    exact: true,
    element: <Find />
  },
  {
    path: ROUTES.DOCTOR_PRESCRIPTION,
    exact: true,
    element: <Prescription />
  },
  {
    path: ROUTES.DOCTOR_MEDICATION,
    exact: true,
    element: <Medication />
  },
  {
    path: ROUTES.DOCTOR_TREATMENT,
    exact: true,
    element: <TreatmentPlan />
  },
  {
    path: ROUTES.PHAR_PRESCRIPTION,
    exact: true,
    element: <Prescription />
  }
];

export default ROUTES_DETAILS;
