import React, {Component} from "react";

import { Hint, Sunburst } from "react-vis";

import { EXTENDED_DISCRETE_COLOR_RANGE as COLORS } from "../theme";


import axios from "axios";
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
    children : EnergyArray
    }
    );
    arrayWithType.push({
    name: 'Waste',
    clr: COLORS[i++],
    children : WasteArray
    }
    );
    arrayWithType.push({
    name: 'Transport',
    clr: COLORS[i++],
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
  animation={{ damping: 20, stiffness: 300 }}
  data={this.createSunData(this.props.user)}
  //data={DATA}
  style={{ stroke: "#fff" }}
  onValueMouseOver={v =>
    this.setState({ hoveredCell: v.x && v.y ? v : false })
  }
  onValueMouseOut={v => this.setState({ hoveredCell: false })}
  height={300}
  margin={{ top: 50, bottom: 50, left: 50, right: 50 }}
  getLabel={d => d.name}
  getSize={d => d.bigness}
  getColor={d => d.clr}
  width={350}
  padAngle={() => 0.02}
>
  
</Sunburst>





            </section>

      );
  }
}
export default SunBurst;