import React, { Component } from 'react';
import Router from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../../actions/sessions';
import styles from './Header.module.scss';

const Header = props => {
  const handleLogout = async () => {
    await logout(props.token);
    Router.push('/');
  };

  return (
    <header className={styles.header}>
      <div className={styles['side-a']}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faCode} />
        </div>
        <div className={styles['blog-title']}>
          <span className={styles.name}>Jack Flannery</span>
          <span className={styles.domain}>.com</span>
        </div>
      </div>
      <div className={styles['side-b']}>
        {props.currentUser && props.token && (
          <div className={styles['session-controls']}>
            <span className={styles.user}>{props.currentUser.email}</span>
            <span className={styles['sign-out']} onClick={() => handleLogout()}>
              Sign Out
            </span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
