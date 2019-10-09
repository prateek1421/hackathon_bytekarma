import React from "react";
class Trade extends React.Component {
  state = {
    offsetFlag: true,
    cost: 100,
    ccRate: 200
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
  changeCost = () => {};
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
                <form action="#" className="form">
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

                  {this.state.offsetFlag ? (
                    <React.Fragment>
                      <div className="form__group">
                        <label className="form_label_size">
                          Trading &nbsp;: &nbsp;&nbsp;&nbsp;
                        </label>
                        <select
                          id="largex"
                          name="trade"
                          className="form__input form__input__width"
                        >
                          <option>Please select value</option>
                          <option>Buy</option>
                          <option>Sell</option>
                        </select>
                      </div>

                      <div className="form__group">
                        <label className="form_label_size">
                          CC Rate &nbsp;: &nbsp;
                        </label>
                        <input
                          type="text"
                          className="form__input form__input__width"
                          value={this.state.ccRate}
                          onChange={this.changeRate}
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
                          id="largey"
                          className="form__input form__input__width"
                          name="scheme"
                        >
                          <option>Please select value</option>
                          <option>scheme1</option>
                          <option>scheme2</option>
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
                          value={this.state.cost}
                        />
                      </div>
                    </React.Fragment>
                  )}
                  <br />
                  <div className="form__group">
                    <button className="btn btn--green">Submit &rarr;</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Trade;
