import React, { useState } from 'react';
import Router from 'next/router';
import { login } from '../../actions/sessions';
import './login.scss';

const SignIn = (props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = async () => {
    if (!email || !password) return;

    await login(email, password);

    Router.replace('/');
    return false;
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-form">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
        <button onClick={() => handleLogin()}>Sign In</button>
      </div>
    </div>
  );
};

export default SignIn;
