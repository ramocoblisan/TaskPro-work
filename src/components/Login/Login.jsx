import React, { useState } from 'react';
import styles from './Login.module.css';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const location = useLocation();
  
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  return (
    <div className={styles.loginContainer}>
      <div className={styles.container}>
        <div className={styles.buttonsContainer}>
        <Link to="/register" 
        className={classNames(styles.button, {[styles.activeButton]: isRegisterPage})}>
          Registration
        </Link>
        <Link to="/login" 
        className={classNames(styles.button, {[styles.activeButton]: isLoginPage})}>
          Log In
        </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              id="username"
              placeholder="Enter your email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              id="password"
              placeholder="Confirm a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.submitBtn}>Log In Now</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
