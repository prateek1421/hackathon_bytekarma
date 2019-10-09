import React from "react";
const Header = props => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src="/img/logo2.png" alt="Logo" className="header__logo" />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Kar-MA</span>
          <span className="heading-primary--sub">
            <strong>Car</strong>bon <strong>M</strong>onitoring &
            <strong>A</strong>ctive trading
          </span>
          <div>
            carbon credits used -
            <div className="heading-primary--note">
              &nbsp;
              <div className="heading-primary--note__progress">&nbsp;70% </div>
            </div>
          </div>
        </h1>

        <a href="#section-tours" className="btn btn--white btn--animated">
          Your Cabon Expenses
        </a>
      </div>
    </header>
  );
};
export default Header;
