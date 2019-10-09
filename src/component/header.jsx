import React,{Component} from "react";
import axios from "axios";
class Header extends Component {
  state ={
    carbonPointsUsed:400,
    totalCarbonPoints:1200,
    percent:40
  }
  componentDidMount=()=>{
    let urlDataArray = document.location.href.split("/");
    console.log("urlDataArray");
    axios.get("/api/dashoboard/"+urlDataArray[urlDataArray.length-1])
    .then(json=>{
      console.log("json.data"); 
      console.log(json.data);
    this.setState({carbonPointsUsed: json.data[0].CarbonPointsUsed,
      totalCarbonPoints: json.data[0].TotalCarbonPoints,
      percent:(json.data[0].CarbonPointsUsed*100/json.data[0].TotalCarbonPoints).toFixed(2)
    })
    }).catch(function(error){console.log(error);});
  }
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
                carbon credits used:{this.state.percent}%
                <div className="heading-primary--note__progress" style={{width:this.state.percent+"%"}}>&nbsp; </div>
              </div>
            </div>
          </h1>
  
          <a href="#section-tours" className="btn btn--white btn--animated">
            Your Cabon Expenses
          </a>
        </div>
      </header>
    );
  }
};
export default Header;
