import React from "react";

const Navigaion = props => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#homeSection" className="navigation__link navigation__width">
              home
            </a>
          </li>
          <li className="navigation__item">
            <a href="#sunburst-section" className="navigation__link navigation__width">
             Carbon expenses
            </a>
          </li>
          <li className="navigation__item">
            <a href="#addExpenseSection" className="navigation__link navigation__width">
              add expenses
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#tradeSection"
              className="navigation__link navigation__width"
            >
              trade
            </a>
          </li>         
        </ul>
      </nav>
    </div>
  );
};

export default Navigaion;
