import React from "react";
import Header from "./component/header";
import Navigaion from "./component/navigaion";
import "./css/icon-font.css";
import "./css/style.css";
import "./App.css";
import AddExpenses from "./component/addExpenses";
import Trade from "./component/trade";
import Footer from "./component/footer";

function App() {
  return (
    <React.Fragment>
      <Navigaion />
      <Header />
      <Trade />
      <AddExpenses />
      <Footer />
    </React.Fragment>
  );
}

export default App;
