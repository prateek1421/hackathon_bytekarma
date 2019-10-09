import React, {Component} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
class AddExpense extends Component {
  constructor(props,context) {
    super(props,context);
    this.state = {
      selectedItemType:"",
      selectedItem : "",
      selectedItemDescription: "",
      selectedDate : "",
      defaultValue : "Please select item",
      amount : ""
    };
  }

  addExpenses = () => {
    var item = this.state.selectedItemType;
    if(item === "Electricity" || item === "Gas") {
      this.setState({selectedItem: "Energy"});
    }
    else if (item === "Paper" || item === "Plastic" || item === "Glass") {
      this.setState({selectedItem: "Waste"});
    }
    else {
      this.setState({selectedItem: "Transport"});
    }
    let urlDataArray = document.location.href.split("/");
    console.log("urlDataArray");
    axios.post("/api/addTransaction/"+this.props.user.id, {
      item: this.state.selectedItem,
      itemType: this.state.selectedItemType,
      description: this.state.selectedItemDescription,
      dateTime: this.state.selectedDate,
      transactionCost: this.state.amount
    });
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
    this.setState({amount : event.target.value});
  }

  render() {
    
    return (
      <section id="addExpenseSection" className="section-book">
        <div className="row">
          <div className="book2">
            <div className="book__form">
              <form action="#" className="form">
                <div className="u-margin-bottom-medium">
                  <h2 className="heading-secondary">Add carbon expenses </h2>
                </div>
  
                <div className="form__group">
                  <label htmlFor="name" className="form__label">
                  Item
                  </label>
                  <select
                            id="largex"
                            name="itemType"
                            defaultValue="lease select item"
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
                  <label htmlFor="name" className="form__label">
                    Description
                  </label>
                  <input type="text" defaultValue="Please enter description" value={this.state.selectedItemDescription}  
                  className="form__input form__input__width" onChange={this.handleDescription}/>
                </div>
                <div className="form__group">
                <label  className="form__label">
                    Date
                  </label>
                <DatePicker selected={this.state.selectedDate} className="form__input form__input__width"
                onSelect={this.handleDateChange} dateFormat="MM/dd/yyyy" />
                </div>
                <div className="form__group">
                <label htmlFor="email" className="form__label">
                    Amount
                  </label>
                <input type="text" className="form__input form__input__width"/>
                </div>
                <div className="form__group">
                  <button className="btn btn--green" onClick={this.addExpenses}>Next step &rarr;</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}
};

export default AddExpense;
