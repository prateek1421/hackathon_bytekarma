import React,{Component} from "react";
class Header extends Component {
   
  render(){
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
                
              <div className="heading-primary--note">
                carbon credits used:{this.props.user?(this.props.user.CarbonPointsUsed*100
                /this.props.user.TotalCarbonPoints)
        .toFixed(2):0}%
                <div className="heading-primary--note__progress" style={{width:(this.props.user?(this.props.user.CarbonPointsUsed*100
                /this.props.user.TotalCarbonPoints)
        .toFixed(2):0)+"%"}}>&nbsp; </div>
              </div>
            </div>
          </h1>
  
          <a href="#section-tours" className="btn btn--white btn--animated">
            Your Carbon Expenses
          </a>
        </div>
      </header>
    );
  }
};
export default Header;
