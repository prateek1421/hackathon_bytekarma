import React from "react";
const Header = props => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src="/img/logo2.png" alt="Logo" className="header__logo" />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">CO2Wallet</span>

          <div className="heading-primary--note">
            &nbsp;
            <div className="heading-primary--note__progress">&nbsp;70% </div>
          </div>
        </h1>

        <a href="#section-tours" className="btn btn--white btn--animated">
          Explore Cabon Expenses
        </a>
      </div>
    </header>
  );
};
export default Header;
