import React, { Component } from 'react';
import Router from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../../actions/sessions';
import './header.scss';

const Header = (props) => {
  const handleLogout = async () => {
    await logout(props.token);
    Router.push('/');
  };

  return (
    <header>
      <div className="side-a">
        <div className="icon">
          <FontAwesomeIcon icon={faCode} />
        </div>
        <div className="blog-title">
          <span className="domain">blog.</span>
          <span className="name">Jack Flannery</span>
          <span className="domain">.me</span>
        </div>
      </div>
      <div className="side-b">
        {props.currentUser && props.token &&
          <div className="session-controls">
            <span className="user">{props.currentUser.email}</span>
            <span className="sign-out" onClick={() => handleLogout()}>Sign Out</span>
          </div>}
      </div>
    </header>
  );
};

export default Header;
