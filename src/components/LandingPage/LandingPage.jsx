import React from 'react';
import LandingMenue from './LandingMenu';
import Mockup from '../../images/mockup.png';
function LandingPage(props) {
  return (
    <div className="landing-page">
      <LandingMenue buttonName1="login" buttonName2="register" />
      <div className="landing-page__heading">
        <h1>Meet the new standards for market trading</h1>
        <img src={Mockup} alt="Preview" />
      </div>
      <div className="landing-page__background">
        <svg width="100%" height="100">
          <path d="M600 0 L0 0 L3200 5250 Z" />
          <path d="M0 0 L0 2000 L4100 4040 Z" />
        </svg>
      </div>
    </div>
  );
}

export default LandingPage;
