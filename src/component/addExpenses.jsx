import React, {Component} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Alert } from "reactstrap";

class AddExpense extends Component {
  constructor(props,context) {
    super(props,context);
    this.state = {
      selectedItemType:"",
      selectedItem : "",
      selectedItemDescription: "",
      selectedDate : "",
      defaultValue : "Please select item",
      amount : "",
      submitSuccessfulMessage : "Expenses submitted successfully",
      showSuccessMessage : false
    };
  }

  addExpenses = (event) => {
    console.log("event");
    console.log(event);
    var item = this.state.selectedItemType;
    var itemType = "";
    if(item === "Electricity" || item === "Gas") {
      itemType = "Energy";
    }
    else if (item === "Paper" || item === "Plastic" || item === "Glass") {
      itemType = "Waste";
    }
    else {
        itemType = "Transport";
    }
    let urlDataArray = document.location.href.split("/");
    axios.post("/api/addTransaction/"+this.props.user.id, {
      item: this.state.selectedItemType,
      itemType: itemType,
      description: this.state.selectedItemDescription,
      dateTime: this.state.selectedDate,
      transactionCost: this.state.amount,
    }).then(json=>{
      console.log("json"+json.data)
      this.setState({showSuccessMessage : true});
    });
    return false;
  }

  clear = ()=>{
    this.state({selectedItemType: ""});
    this.state({selectedItemDescription: ""})
    this.state({selectedDate: ""})
    this.state({amount: ""})
  }

  handleDateChange = date => {
    this.setState({selectedDate : date});
  }

  handleChange = itemType =>  {
   this.setState({selectedItemType : itemType.target.value});
    }

  handleDescription= event =>  {
    this.setState({selectedItemDescription:event.target.value});
  }

  handleAmount = event => {
    console.log("amount");
    console.log(event.target.value);
    this.setState({amount : event.target.value});
  }
  handleDismiss =() => {
    this.setState({ showSuccessMessage: false });
    this.setState({selectedItemType: ""});
    this.setState({selectedItemDescription: ""})
    this.setState({selectedDate: ""})
    this.setState({amount: ""})
  }
setMessageHidden=()=>{
  setTimeout( 
    this.handleDismiss
  , 3000);
}
  render() {
    
    return (
      <section id="addExpenseSection" className="section-book">
         <div className="u-margin-bottom-medium at-center-text">
                  <h2 className="heading-secondary color-dark">Add carbon expenses </h2>
                </div>
        <div className="row">
          <div className="book2">
            <div className="book__form">
              {this.state.showSuccessMessage ? this.setMessageHidden():null}
            {this.state.showSuccessMessage ? (
          <p className="successMessage"><h2>Expenses saved successfully</h2></p>
            ): ("")}
                <div className="form__group">
                <label className="form_label_size">
                          Item &nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                  <select
                            id="largex"
                            name="itemType"
                            value={this.state.selectedItemType}
                            className="form__input form__input__width"
                            onChange={this.handleChange}
                          >
                            <option value="">Please Select an Item</option>
                            <option value="Electricity">Electricity</option>
                            <option value="Gas">Gas</option>
                            <option value="Flights">Flights</option>
                            <option value="Car">Car</option>
                            <option value="Taxi">Taxi</option>
                            <option value="Bike">Bike</option>
                            <option value="Train">Train</option>
                            <option value="Bus">Bus</option>
                            <option value="Paper">Paper</option>
                            <option value="Plastic">Plastic</option>
                            <option value="Glass">Glass</option>
                  </select>
                </div>
                <div className="form__group">
                <label className="form_label_size">
                          Desc &nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                  <input type="text" value={this.state.selectedItemDescription}  
                  className="form__input form__input__width" onChange={this.handleDescription}/>
                </div>
                <div className="form__group">
                <label className="form_label_size">
                          Date &nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                <DatePicker selected={this.state.selectedDate} className="form__input form__input__width"
                onSelect={this.handleDateChange} dateFormat="MM/dd/yyyy" />
                </div>
                <div className="form__group">
                <label className="form_label_size">
                          Amount &nbsp;: &nbsp;
                        </label>
                <input type="text" value = {this.state.amount} className="form__input form__input__width" onChange={this.handleAmount}/>
                </div>
                <div className="form__group">
                  <button className="btn btn--green" onClick={this.addExpenses}>Submit &rarr;</button>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
}
};

export default AddExpense;
