import React from "react";
import Header from "./component/header";
import Navigaion from "./component/navigaion";
import "./css/icon-font.css";
import "./css/style.css";
import "./App.css";
import AddExpenses from "./component/addExpenses";
import Trade from "./component/trade";
import Footer from "./component/footer";
import axios from "axios";
import SunBurst from "./component/sunburst";
axios.defaults.baseURL="https://carma-function.azurewebsites.net";
class App extends React.Component {
  state={
    userObject:null
  }
  componentDidMount=()=>{
    let urlDataArray = document.location.href.split("/");
    console.log("urlDataArray");
    axios.get("/api/dashoboard/"+urlDataArray[urlDataArray.length-1])
    .then(json=>{
      console.log("json.data");
      console.log(json.data);
    this.setState({userObject:json.data[0]});
    }).catch(function(error){console.log(error);});
  }
  render(){
    return (
      
      <React.Fragment>
        <Navigaion />
        <Header user={this.state.userObject}/>        
        <Trade user={this.state.userObject}/>
        <AddExpenses user={this.state.userObject}/>
        <Footer />
      </React.Fragment>
    );
  }
  
}

export default App;
