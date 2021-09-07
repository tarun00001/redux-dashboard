import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Graph = (props) => {
    return (
     
        <div className="col-sm-6 mt-3">
        <div className="card">
        <div className="card-body">
        <ResponsiveContainer width="95%" height={400}>
       <BarChart
              width={400}
              height={300}
              data={props.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                
                dataKey={props.dataKey}
                fill={props.fill}
                
              />
              </BarChart>
              </ResponsiveContainer>
        </div>
      </div>
      </div>
     
    )
}

export default Graph
