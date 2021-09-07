import React from 'react'

const DeviceDetail = (props) => {
    return (
       
        <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
          <img src={props.src} alt="logo" width="150" height="100"/>
            <h5 className="card-title"><strong> {props.title}:</strong> {props.detail}</h5>
          </div>
        </div>
        </div>
      
    )
}

export default DeviceDetail
