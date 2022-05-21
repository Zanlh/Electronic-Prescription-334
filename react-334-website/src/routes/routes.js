import * as ROUTES from './paths';

import HomePage from '../pages/HomePage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import PrescriptionHistory from '../pages/PrescriptionsHistory';
import TokenPage from '../pages/TokenPage';
import Prescription from '../pages/Prescription';
import TreatmentPlan from '../pages/TreatmentPlan';

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
    path: ROUTES.PRESCRIPTIONHISTORY,
    exact: true,
    element: <PrescriptionHistory />
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
  }
];

export default ROUTES_DETAILS;
