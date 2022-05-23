import React, { useState, useContext } from 'react';
import cx from 'classnames';

import * as ROUTES from '../../routes/paths';

import styles from './style.module.css';

import * as LINKS from './links';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { UserInfoContext } from '../../context/userContext';

const Sidebar = (props) => {
  const { pathname } = useLocation();
  const { userInfo, clearUserInfo } = useContext(UserInfoContext);
  const isShowUser = !pathname.includes('login') && !pathname.includes('signup');
  const renderLinks = () => {
    if (pathname === ROUTES.LOGIN || pathname === ROUTES.SIGNUP) return LINKS.LOGIN_SIGNUP;
    if (pathname.includes('user')) return LINKS.USER_PRESCRIPTION;
    return null;
  }

  const links = renderLinks();

  return (
    <>
      {links && (
        <div className={cx(styles.container, styles[userInfo.role])}>
          <div>
            {
              links.map((link) => (
                  <Link 
                    className={cx(styles.link, styles[`link-${userInfo.role}`])} 
                    key={link.path} 
                    to={link.path}
                  >
                    <span 
                      className={cx(styles.linkContent, pathname === link.path ? styles[`linkActive-${userInfo.role}`] : null)}
                    >
                      {link.content}
                    </span>
                  </Link>
                )
              )
            }
          </div>
          <div>
            {isShowUser && userInfo?.token && <span className={cx(styles.link, styles[`name-${userInfo.role}`])}>{userInfo.fullname}</span>}
            {
              <button className={cx(styles.logout, styles.link, styles[`link-${userInfo.role}`])} onClick={() => clearUserInfo()}>
                {isShowUser ? 'Logout' : 'Back'}
              </button>
            }
          </div>
        </div>
      )}
    </>
  )
}

export default (Sidebar);