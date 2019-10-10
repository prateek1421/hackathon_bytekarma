import React,{Component} from "react";
class Header extends Component {
   
  render(){
    return (
      <header className="header" id ="homeSection">
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


            <div class="row" style={{marginTop:"2rem"}} >
              <div className="colx"><div className="heading-with-bottom-border">Total carbon credit 
              <span className="ccFigure">{this.props.user?this.props.user.TotalCarbonPoints.toFixed(2): 0} </span>
              cc</div></div>
              <div className="colx"><div className="heading-with-bottom-border">Carbon credit used 
              <span className="ccFigure">{this.props.user?this.props.user.CarbonPointsUsed.toFixed(2): 0 } </span>
              cc</div></div>
              <div className="colx"><div className="heading-with-bottom-border">Carbon emmition 
              <span className="ccFigure">{this.props.user?(this.props.user.CarbonPointsUsed*4).toFixed(2): 0 } </span>
              kg</div></div>
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
