import React, { useState } from 'react';
import LandingMenue from '../LandingPage/LandingMenu';

import registerPic from '../../images/img-02.png';

function Register(props) {
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmai] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = (event) => {
    console.log('clicked');
  };

  const handleEmailInputChange = (event) => {
    console.log(event);
    setEmai(event.target.value);
  };

  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <section className="limiter">
      <LandingMenue buttonName1="home" buttonName2="login" />
      <div className="constainer-register">
        <div className="wrap-register">
          <div className="register-pic js-tilt" data-title="">
            <img src={registerPic} alt="Login Img" />
          </div>
          <form className="register-form validate-form">
            <span className="register-form-title">Register</span>
            {errorMessage === '' ? <div /> : <h3>{errorMessage}</h3>}
            <div className="wrap-input">
              <input
                className="input"
                type="text"
                name="email"
                placeholder="Enter email"
                required
                onChange={(event) => handleEmailInputChange(event)}
              />
            </div>
            <div className="wrap-input" data-validate="Password is required">
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                onChange={(event) => handlePasswordInputChange(event)}
              />
            </div>
            <div className="wrap-input" data-validate="Password is required">
              <input
                className="input"
                type="password"
                name="password2"
                placeholder="Conform password"
                required
                onChange={(event) => handlePasswordInputChange(event)}
              />
            </div>
            <div className="container-register-form-btn">
              <button
                type="submit"
                className="register-form-btn"
                onClick={(event) => handleLoginClick(event)}
              >
                Register
              </button>
            </div>
            <div className="text-center">
              <span className="txt1">Forgot</span>{' '}
              <a className="txt2" href="Register">
                Password ?
              </a>
            </div>

            <div className="text-center">
              <span className="txt2">
                Doesn't have an account ?
                <a className="txt2" href="Register">
                  {' '}
                  Register here
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
