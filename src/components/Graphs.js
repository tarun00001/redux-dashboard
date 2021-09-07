import React from 'react'
import Graph from './Graph'

const Graphs = (props) => {
    return (
      
      <div className="row home">
      <Graph data={props.glucose} dataKey="avgGlucose" fill="#009900"/> 
      <Graph  data={ props.basal.map((num,index) => {  
        return {averageInsulin: (num.avgBasal + props.bolus[index].avgBolus)/2, month: num.month, year: num.year};
        })} dataKey="averageInsulin" fill="#00CCCC"/>
    </div>
      
    )
}

export default Graphs
