import * as ROUTES from './paths';

import HomePage from '../pages/HomePage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';

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
  }
];

export default ROUTES_DETAILS;
