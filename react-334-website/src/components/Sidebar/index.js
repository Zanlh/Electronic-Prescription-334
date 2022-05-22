import React, {useState} from 'react';
import cx from 'classnames';
import { useParams } from 'react-router-dom';

import * as ROUTES from '../../routes/paths';

import styles from './style.module.css';

import * as LINKS from './links';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Sidebar = (props) => {
  const { pathname } = useLocation();
  console.log('path', pathname);
  console.log(ROUTES.USER_PRESCRIPTION_DETAIL);
  const links = () => {
    if (pathname === ROUTES.LOGIN || pathname === ROUTES.SIGNUP) return LINKS.LOGIN_SIGNUP;
    if (pathname.includes('user')) return LINKS.USER_PRESCRIPTION;
    return null;
  }
  
  console.log(ROUTES);

  return (
    <div className={styles.container}>
      {links().map((link) => <Link className={styles.link} key={link.path} to={link.path}><span className={cx(styles.linkContent, pathname === link.path ? styles.linkActive : null)}>{link.content}</span></Link>)}
    </div>
  )
}

export default Sidebar