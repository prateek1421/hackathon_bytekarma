import React, {Component} from "react";

import { Hint, Sunburst } from "react-vis";

import { EXTENDED_DISCRETE_COLOR_RANGE as COLORS } from "../theme";


import axios from "axios";

const jsonInput = {
  "id": "3",
  "firstName": "Rohit",
  "lastName": "Gupta",
  "CarbonPointsUsed": 604.0858670520232,
  "TotalCarbonPoints": 1200,
  "email": "rohit-e.gupta@db.com",
  "isDefaulted": false,
  "transactions": [
      {
          "item": "Electricity",
          "itemType": "Energy",
          "carbonPoints": 2.4375,
          "description": "Test",
          "dateTime": "01/10/2019",
          "transactionCost": "100",
          "month": "01"
      },
      {
          "item": "Gas",
          "itemType": "Energy",
          "carbonPoints": 0.5225,
          "description": "Test",
          "dateTime": "01/20/2019",
          "transactionCost": "50",
          "month": "01"
      },
      {
          "item": "Flights",
          "itemType": "Transport",
          "carbonPoints": 14.450867052023122,
          "description": "Test",
          "dateTime": "01/15/2019",
          "transactionCost": "1000",
          "month": "01"
      },
      {
          "item": "Car",
          "itemType": "Transport",
          "carbonPoints": 19,
          "description": "Test",
          "dateTime": "01/25/2019",
          "transactionCost": "2000",
          "month": "01"
      },
      {
          "item": "Paper",
          "itemType": "Waste",
          "carbonPoints": 0.03,
          "description": "Test",
          "dateTime": "01/08/2019",
          "transactionCost": "100",
          "month": "01"
      },
      {
          "item": "Glass",
          "itemType": "Waste",
          "carbonPoints": 0.125,
          "description": "Test",
          "dateTime": "01/18/2019",
          "transactionCost": "100",
          "month": "01"
      },
      {
          "item": "Electricity",
          "itemType": "Energy",
          "carbonPoints": 3.6075,
          "description": "Test",
          "dateTime": "02/10/2019",
          "transactionCost": "150",
          "month": "02"
      },
      {
          "item": "Gas",
          "itemType": "Energy",
          "carbonPoints": 1.5675,
          "description": "Test",
          "dateTime": "02/20/2019",
          "transactionCost": "100",
          "month": "02"
      },
      {
          "item": "Taxi",
          "itemType": "Transport",
          "carbonPoints": 1.365,
          "description": "Test",
          "dateTime": "02/15/2019",
          "transactionCost": "100",
          "month": "02"
      },
      {
          "item": "Bike",
          "itemType": "Transport",
          "carbonPoints": 3.85,
          "description": "Test",
          "dateTime": "02/25/2019",
          "transactionCost": "300",
          "month": "02"
      },
      {
          "item": "Paper",
          "itemType": "Waste",
          "carbonPoints": 0.13,
          "description": "Test",
          "dateTime": "02/08/2019",
          "transactionCost": "400",
          "month": "02"
      },
      {
          "item": "Plastic",
          "itemType": "Waste",
          "carbonPoints": 0.04,
          "description": "Test",
          "dateTime": "02/18/2019",
          "transactionCost": "50",
          "month": "02"
      },
      {
          "item": "Electricity",
          "itemType": "Energy",
          "carbonPoints": 24.375,
          "description": "Test",
          "dateTime": "03/10/2019",
          "transactionCost": "1000",
          "month": "03"
      },
      {
          "item": "Gas",
          "itemType": "Energy",
          "carbonPoints": 6.27,
          "description": "Test",
          "dateTime": "03/20/2019",
          "transactionCost": "400",
          "month": "03"
      },
      {
          "item": "Train",
          "itemType": "Transport",
          "carbonPoints": 11.25,
          "description": "Test",
          "dateTime": "03/15/2019",
          "transactionCost": "1800",
          "month": "03"
      },
      {
          "item": "Bus",
          "itemType": "Transport",
          "carbonPoints": 11.25,
          "description": "Test",
          "dateTime": "03/25/2019",
          "transactionCost": "600",
          "month": "03"
      },
      {
          "item": "Glass",
          "itemType": "Waste",
          "carbonPoints": 0.25,
          "description": "Test",
          "dateTime": "03/08/2019",
          "transactionCost": "200",
          "month": "03"
      },
      {
          "item": "Plastic",
          "itemType": "Waste",
          "carbonPoints": 0.125,
          "description": "Test",
          "dateTime": "03/18/2019",
          "transactionCost": "150",
          "month": "03"
      },
      {
          "item": "Electricity",
          "itemType": "Energy",
          "carbonPoints": 31.6875,
          "description": "Test",
          "dateTime": "04/10/2019",
          "transactionCost": "1300",
          "month": "04"
      },
      {
          "item": "Gas",
          "itemType": "Energy",
          "carbonPoints": 7.8374999999999995,
          "description": "Test",
          "dateTime": "04/20/2019",
          "transactionCost": "500",
          "month": "04"
      },
      {
          "item": "Flight",
          "itemType": "Transport",
          "carbonPoints": 0,
          "description": "Test",
          "dateTime": "04/15/2019",
          "transactionCost": "1200",
          "month": "04"
      },
      {
          "item": "Car",
          "itemType": "Transport",
          "carbonPoints": 14.25,
          "description": "Test",
          "dateTime": "04/25/2019",
          "transactionCost": "1500",
          "month": "04"
      },
      {
          "item": "Glass",
          "itemType": "Waste",
          "carbonPoints": 0.75,
          "description": "Test",
          "dateTime": "04/08/2019",
          "transactionCost": "600",
          "month": "04"
      },
      {
          "item": "Plastic",
          "itemType": "Waste",
          "carbonPoints": 0.20500000000000002,
          "description": "Test",
          "dateTime": "04/18/2019",
          "transactionCost": "250",
          "month": "04"
      },
      {
          "item": "Electricity",
          "itemType": "Energy",
          "carbonPoints": 34.125,
          "description": "Test",
          "dateTime": "05/10/2019",
          "transactionCost": "1400",
          "month": "05"
      },
      {
          "item": "Gas",
          "itemType": "Energy",
          "carbonPoints": 1.5675,
          "description": "Test",
          "dateTime": "05/20/2019",
          "transactionCost": "100",
          "month": "05"
      },
      {
          "item": "Taxi",
          "itemType": "Transport",
          "carbonPoints": 8.19,
          "description": "Test",
          "dateTime": "05/15/2019",
          "transactionCost": "600",
          "month": "05"
      },
      {
          "item": "Bike",
          "itemType": "Transport",
          "carbonPoints": 2.5575,
          "description": "Test",
          "dateTime": "05/25/2019",
          "transactionCost": "200",
          "month": "05"
      },
      {
          "item": "Paper",
          "itemType": "Waste",
          "carbonPoints": 0.03,
          "description": "Test",
          "dateTime": "05/08/2019",
          "transactionCost": "100",
          "month": "05"
      },
      {
          "item": "Plastic",
          "itemType": "Waste",
          "carbonPoints": 0.04,
          "description": "Test",
          "dateTime": "05/18/2019",
          "transactionCost": "50",
          "month": "05"
      },
      {
          "item": "Electricity",
          "itemType": "Energy",
          "carbonPoints": 12.1875,
          "description": "Test",
          "dateTime": "06/10/2019",
          "transactionCost": "500",
          "month": "06"
      },
      {
          "item": "Gas",
          "itemType": "Energy",
          "carbonPoints": 0.5225,
          "description": "Test",
          "dateTime": "06/20/2019",
          "transactionCost": "50",
          "month": "06"
      },
      {
          "item": "Train",
          "itemType": "Transport",
          "carbonPoints": 1.25,
          "description": "Test",
          "dateTime": "06/15/2019",
          "transactionCost": "200",
          "month": "06"
      },
      {
          "item": "Bus",
          "itemType": "Transport",
          "carbonPoints": 3.75,
          "description": "Test",
          "dateTime": "06/25/2019",
          "transactionCost": "200",
          "month": "06"
      },
      {
          "item": "Paper",
          "itemType": "Waste",
          "carbonPoints": 0.015,
          "description": "Test",
          "dateTime": "06/08/2019",
          "transactionCost": "50",
          "month": "06"
      },
      {
          "item": "Plastic",
          "itemType": "Waste",
          "carbonPoints": 0.04,
          "description": "Test",
          "dateTime": "06/18/2019",
          "transactionCost": "50",
          "month": "06"
      },
      {
          "item": "Electricity",
          "itemType": "Energy",
          "carbonPoints": 29.25,
          "description": "Test",
          "dateTime": "07/10/2019",
          "transactionCost": "1200",
          "month": "07"
      },
      {
          "item": "Gas",
          "itemType": "Energy",
          "carbonPoints": 18.81,
          "description": "Test",
          "dateTime": "07/20/2019",
          "transactionCost": "1200",
          "month": "07"
      },
      {
          "item": "Flight",
          "itemType": "Transport",
          "carbonPoints": 0,
          "description": "Test",
          "dateTime": "07/15/2019",
          "transactionCost": "1500",
          "month": "07"
      },
      {
          "item": "Car",
          "itemType": "Transport",
          "carbonPoints": 23.75,
          "description": "Test",
          "dateTime": "07/25/2019",
          "transactionCost": "2500",
          "month": "07"
      },
      {
          "item": "Glass",
          "itemType": "Waste",
          "carbonPoints": 0.5,
          "description": "Test",
          "dateTime": "07/08/2019",
          "transactionCost": "400",
          "month": "07"
      },
      {
          "item": "Plastic",
          "itemType": "Waste",
          "carbonPoints": 0.5,
          "description": "Test",
          "dateTime": "07/18/2019",
          "transactionCost": "600",
          "month": "07"
      },
      {
          "item": "Electricity",
          "itemType": "Energy",
          "carbonPoints": 14.625,
          "description": "Test",
          "dateTime": "08/10/2019",
          "transactionCost": "600",
          "month": "08"
      },
      {
          "item": "Gas",
          "itemType": "Energy",
          "carbonPoints": 4.7025,
          "description": "Test",
          "dateTime": "08/20/2019",
          "transactionCost": "300",
          "month": "08"
      },
      {
          "item": "Taxi",
          "itemType": "Transport",
          "carbonPoints": 4.095,
          "description": "Test",
          "dateTime": "08/15/2019",
          "transactionCost": "300",
          "month": "08"
      },
      {
          "item": "Bike",
          "itemType": "Transport",
          "carbonPoints": 1.265,
          "description": "Test",
          "dateTime": "08/25/2019",
          "transactionCost": "100",
          "month": "08"
      },
      {
          "item": "Paper",
          "itemType": "Waste",
          "carbonPoints": 0.03,
          "description": "Test",
          "dateTime": "08/08/2019",
          "transactionCost": "100",
          "month": "08"
      },
      {
          "item": "Glass",
          "itemType": "Waste",
          "carbonPoints": 0.125,
          "description": "Test",
          "dateTime": "08/18/2019",
          "transactionCost": "100",
          "month": "08"
      },
      {
          "item": "Electricity",
          "itemType": "Energy",
          "carbonPoints": 34.125,
          "description": "Test",
          "dateTime": "09/10/2019",
          "transactionCost": "1400",
          "month": "09"
      },
      {
          "item": "Gas",
          "itemType": "Energy",
          "carbonPoints": 15.674999999999999,
          "description": "Test",
          "dateTime": "09/20/2019",
          "transactionCost": "1000",
          "month": "09"
      },
      {
          "item": "Train",
          "itemType": "Transport",
          "carbonPoints": 10,
          "description": "Test",
          "dateTime": "09/15/2019",
          "transactionCost": "1600",
          "month": "09"
      },
      {
          "item": "Bus",
          "itemType": "Transport",
          "carbonPoints": 5.625,
          "description": "Test",
          "dateTime": "09/25/2019",
          "transactionCost": "300",
          "month": "09"
      },
      {
          "item": "Plastic",
          "itemType": "Waste",
          "carbonPoints": 0.5,
          "description": "Test",
          "dateTime": "09/08/2019",
          "transactionCost": "600",
          "month": "09"
      },
      {
          "item": "Glass",
          "itemType": "Waste",
          "carbonPoints": 0.75,
          "description": "Test",
          "dateTime": "09/18/2019",
          "transactionCost": "600",
          "month": "09"
      },
      {
          "item": "Electricity",
          "itemType": "Energy",
          "carbonPoints": 12.1875,
          "description": "Test",
          "dateTime": "10/10/2019",
          "transactionCost": "500",
          "month": "10"
      },
      {
          "item": "Gas",
          "itemType": "Energy",
          "carbonPoints": 7.8374999999999995,
          "description": "Test",
          "dateTime": "10/20/2019",
          "transactionCost": "500",
          "month": "10"
      },
      {
          "item": "Flight",
          "itemType": "Transport",
          "carbonPoints": 0,
          "description": "Test",
          "dateTime": "10/15/2019",
          "transactionCost": "800",
          "month": "10"
      },
      {
          "item": "Car",
          "itemType": "Transport",
          "carbonPoints": 33.25,
          "description": "Test",
          "dateTime": "10/25/2019",
          "transactionCost": "3500",
          "month": "10"
      },
      {
          "item": "Paper",
          "itemType": "Waste",
          "carbonPoints": 0.065,
          "description": "Test",
          "dateTime": "10/08/2019",
          "transactionCost": "200",
          "month": "10"
      },
      {
          "item": "Glass",
          "itemType": "Waste",
          "carbonPoints": 0.125,
          "description": "Test",
          "dateTime": "10/18/2019",
          "transactionCost": "100",
          "month": "10"
      },
      {
          "item": "Electricity",
          "itemType": "Energy",
          "carbonPoints": 36.5625,
          "description": "Test",
          "dateTime": "11/11/2019",
          "transactionCost": "1500",
          "month": "11"
      },
      {
          "item": "Gas",
          "itemType": "Energy",
          "carbonPoints": 10.9725,
          "description": "Test",
          "dateTime": "11/20/2019",
          "transactionCost": "700",
          "month": "11"
      },
      {
          "item": "Taxi",
          "itemType": "Transport",
          "carbonPoints": 28.717499999999998,
          "description": "Test",
          "dateTime": "11/15/2019",
          "transactionCost": "2100",
          "month": "11"
      },
      {
          "item": "Bike",
          "itemType": "Transport",
          "carbonPoints": 2.5575,
          "description": "Test",
          "dateTime": "11/25/2019",
          "transactionCost": "200",
          "month": "11"
      },
      {
          "item": "Paper",
          "itemType": "Waste",
          "carbonPoints": 0.23,
          "description": "Test",
          "dateTime": "11/08/2019",
          "transactionCost": "700",
          "month": "11"
      },
      {
          "item": "Plastic",
          "itemType": "Waste",
          "carbonPoints": 0.5,
          "description": "Test",
          "dateTime": "11/18/2019",
          "transactionCost": "600",
          "month": "11"
      },
      {
          "item": "Electricity",
          "itemType": "Energy",
          "carbonPoints": 60.9375,
          "description": "Test",
          "dateTime": "12/10/2019",
          "transactionCost": "2500",
          "month": "12"
      },
      {
          "item": "Gas",
          "itemType": "Energy",
          "carbonPoints": 15.674999999999999,
          "description": "Test",
          "dateTime": "12/20/2019",
          "transactionCost": "1000",
          "month": "12"
      },
      {
          "item": "Train",
          "itemType": "Transport",
          "carbonPoints": 2.5,
          "description": "Test",
          "dateTime": "12/15/2019",
          "transactionCost": "400",
          "month": "12"
      },
      {
          "item": "Bus",
          "itemType": "Transport",
          "carbonPoints": 7.5,
          "description": "Test",
          "dateTime": "12/25/2019",
          "transactionCost": "400",
          "month": "12"
      },
      {
          "item": "Glass",
          "itemType": "Waste",
          "carbonPoints": 0.25,
          "description": "Test",
          "dateTime": "12/08/2019",
          "transactionCost": "200",
          "month": "12"
      },
      {
          "item": "Plastic",
          "itemType": "Waste",
          "carbonPoints": 0.08,
          "description": "Test",
          "dateTime": "12/18/2019",
          "transactionCost": "100",
          "month": "12"
      },
      {
          "item": "Plastic",
          "itemType": "Waste",
          "carbonPoints": 0.08,
          "description": "Test",
          "dateTime": "01/18/2019",
          "transactionCost": "100",
          "month": "01"
      },
      {
          "item": "Plastic",
          "itemType": "Waste",
          "carbonPoints": 0.08,
          "description": "Test",
          "dateTime": "01/18/2019",
          "transactionCost": "100",
          "month": "01"
      }
  ],
  "trades": [],
  "offsets": [],
  "_rid": "3j98APru7j4DAAAAAAAAAA==",
  "_self": "dbs/3j98AA==/colls/3j98APru7j4=/docs/3j98APru7j4DAAAAAAAAAA==/",
  "_etag": "\"0000f892-0000-1c00-0000-5d9e57500000\"",
  "_attachments": "attachments/",
  "_ts": 1570658128
};

//const masterArray = createSunData(jsonInput);


class SunBurst extends Component {
  constructor(props,context) {
    super(props,context);
    this.state = {
    
        
    };
  }

  createSunData=(data)=> {
      console.log(data);
      if (data == null){
          return;
      }
    var i = 0;
    var sunBurstArray = [];
    var arrayWithType = [];
    var finalArray = [];
    var arr = data.transactions ;
    //var groupArray = require('group-array');
    //var groupedArray = groupArray(arr, 'item');
    var groupBy = require('json-groupby')
    var group = groupBy(arr, ['item'], ['carbonPoints', 'itemType']);
    for (var key in group) {
    finalArray.push(
    {
    name: key,
    itemType: group[key].itemType[0],
    children: [],
    labelStyle : {fontSize :15},
    clr: COLORS[i++],
    bigness: group[key].carbonPoints.reduce(function(a,b){
                                                     return a + b
                                                   }, 0)
    }
    );
    
    
    
    
    }
    var EnergyArray = finalArray.filter(arr => arr.itemType === 'Energy');
    var WasteArray = finalArray.filter(arr => arr.itemType === 'Waste');
    var TransportArray = finalArray.filter(arr => arr.itemType === 'Transport');
    arrayWithType.push({
    name: 'Energy',
    clr: COLORS[i++],
    labelStyle : {fontSize :15},
    children : EnergyArray
    }
    );
    arrayWithType.push({
    name: 'Waste',
    clr: COLORS[i++],
    labelStyle : {fontSize :15},
    children : WasteArray
    }
    );
    arrayWithType.push({
    name: 'Transport',
    clr: COLORS[i++],
    labelStyle : {fontSize :15},
    children : TransportArray
    }
    );
    
    
    
    sunBurstArray.push({
    name: 'Carbon',
    children : arrayWithType
    });
    
    
    
    console.log(sunBurstArray);
    
    return sunBurstArray;
    }
    

  render(){
    console.log(this.props.user);
      return(
        <section id="sunburst-section" className="section-stories">
<Sunburst
hideRootNode
  animation={{ damping: 20, stiffness: 300 }}
  data={this.createSunData(jsonInput)[0]}
  //data={DATA}
  style={{ stroke: "#fff" }}
  height={600}
  margin={{ top: 50, bottom: 50, left: 50, right: 50 }}
  getLabel={d => d.name}
  getSize={d => d.bigness}
  getColor={d => d.clr}
  width={600}
  padAngle={() => 0.02}
  labelStyle= {{fontSize: 55}}
>
  
</Sunburst>





            </section>

      );
  }
}
export default SunBurst;