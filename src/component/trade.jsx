import React,{Component} from "react";
import axios from "axios";

const headers = {
  "x-functions-key": "bjaQ0f/SrL9wjfiXWhEs3VeSSbRp/VTmaGQ9LukO3FuEGGXGNu8s7g=="
}

const dateFormat = require("dateformat");
class Trade extends Component {
  state = {
    offsetFlag: true,
    cost: 100,
    ccRate: 200,
    tradeType : "",
    carbonUnit : "",
    schemeKey: "",
    schemeCost: "",
    schemeValue: ""
  };
  switchRadios = flag => {
    console.log("---------");
    console.log(flag);
    if (flag === "offset") {
      this.setState({ offsetFlag: true });
    } else {
      this.setState({ offsetFlag: false });
    }
  };
  handleTradeType = (event) => {
    console.log(event.target.value);
    this.setState({tradeType : event.target.value});
  }

  handleCarbonUnit = (event) => {
    console.log(event.target.value);
    this.setState({carbonUnit : event.target.value});
  }

  submit = (event) => {
    let newDate = new Date();
    console.log(this.props.user.id);
    if(!this.state.offsetFlag) {
      var type = "";
      var price = this.state.carbonUnit * 1000;
      if(this.state.tradeType === "Buy") {
        type = "BUY"
      }else {
        type = "SELL"
      }
      axios.post("/api/addTrade/"+this.props.user.id, {
      type : type,
      carbonPoints : this.state.carbonUnit,
      price : price,
      dateTime : dateFormat(newDate,"mm-dd-yyyy")
      }).then(json=>console.log(json.data));
    }
    else {
      axios.post("/api/addOffset/"+this.props.user.id, {
        item: this.state.schemeKey,
        description: this.state.schemeValue,
        dateTime: dateFormat(newDate,"mm-dd-yyyy"),
        transactionCost: this.state.schemeCost
        },
        {
          headers : headers
        }).then(json=>console.log(json.data));
    }
  }

  handleSchemeSelection = (event) => {
    if(event.target.value === "Renewable Energy Source") {
      this.setState({schemeKey : "renewableEnergy"});
    } else if (event.target.value === "Tree Plantation") {
     this.setState({schemeKey : "plantTrees"});
    } else {
    this.setState({schemeKey : "recyclePlastic"});
  }
    this.setState({schemeValue : event.target.value});
  }

  changeCost = (event) => {
    this.setState({schemeCost :event.target.value})
  };
  changeRate = () => {};
  render() {
    return (
      <section className="section-stories">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Offset and carbon credits</h2>
        </div>

        <div className="row">
          <div className="row">
            <div className="book">
              <div className="book__form">
                  <div className="form__group u-margin-bottom-medium">
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="small"
                        name="trade"
                        onChange={() => this.switchRadios("offset")}
                        defaultChecked
                      />
                      <label htmlFor="small" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Offset
                      </label>
                    </div>

                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="large"
                        name="trade"
                        onChange={() => this.switchRadios("trade")}
                      />
                      <label htmlFor="large" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Trading
                      </label>
                    </div>
                  </div>

                  {!this.state.offsetFlag ? (
                    <React.Fragment>
                      <div className="form__group">
                        <label className="form_label_size">
                          Trading &nbsp;: &nbsp;&nbsp;&nbsp;
                        </label>
                        <select
                          id="largex"
                          name="trade"
                          className="form__input form__input__width"
                          value={this.state.tradeType}
                          onChange = {this.handleTradeType}
                        >
                          <option>Please select value</option>
                          <option value="Buy">Buy</option>
                          <option value="Sell">Sell</option>
                        </select>
                      </div>

                      <div className="form__group">
                        <label className="form_label_size">
                          CC Unit &nbsp;: &nbsp;
                        </label>
                        <input
                          type="text"
                          className="form__input form__input__width"
                          value={this.state.carbonUnit}
                          onChange={this.handleCarbonUnit}
                          id="ccRate"
                          name="ccRate"
                        />
                      </div>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <div className="form__group">
                        <label className="form_label_size">
                          Scheme &nbsp;: &nbsp;&nbsp;&nbsp;
                        </label>
                        <select
                          className="form__input form__input__width"
                          name="scheme"
                          value={this.state.schemeValue}
                          onChange={this.handleSchemeSelection}

                        >
                          <option value="" key="">Please select value</option>
                          <option value="Renewable Energy Source" id="renewableEnergy">Renewable Energy Source</option>
                          <option value="Tree Plantation" id="plantTrees">Tree Plantation</option>
                          <option value="Recycle Single Use Plastic Waste" id="recyclePlastic ">Recycle Single Use Plastic Waste</option>
                        </select>
                      </div>

                      <div className="form__group">
                        <label className="form_label_size">
                          Cost &nbsp;: &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                          &nbsp;
                        </label>
                        <input
                          type="text"
                          className="form__input form__input__width"
                          id="cost"
                          name="cost"
                          onChange={this.changeCost}
                          value={this.state.schemeCost}
                        />
                      </div>
                    </React.Fragment>
                  )}
                  <br />
                  <div className="form__group">
                    <button className="btn btn--green" onClick={this.submit}>Submit &rarr;</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Trade;
