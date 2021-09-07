import React from 'react'
import CircularBar from './CircularBar';
import ProgressBar from "./ProgressBar";

const Bars = (props) => {
    return (
     
        <div className="row home">
        <div className="col-sm-6 mt-3">
  
          <CircularBar data={props.carb && props.carb !== -1 ? props.carb : "_"} title="CARB INTAKE" unit="units" />
          <CircularBar data={props.glucose} title="GLUCOMETER" unit="mg/dl" />
          <CircularBar  data={props.insulin} title="INSULIN DOSE" unit="units" />
          </div>
          <div className="col-sm-6 mt-3">
          <ProgressBar data={props.avgInsulin} title="This Week"/>
          <ProgressBar data={props.prevAvgInsulin} title="Previous Week" />
          </div>
  
  </div>
       
    )
}

export default Bars
