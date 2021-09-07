import React from 'react'

const Device = (props) => {
    return (
        <div className="col-lg-4 device">
        <div className="card" >
        <div className="card-body">
          <h5 className="">
           <strong> Device SerialNo:</strong> {props.device.serialNo.toUpperCase()} 
          </h5>
          <p className="card-text"><strong>Manufacture Date:</strong> {(props.device.manufactureDate).substring(0, props.device.manufactureDate.indexOf('T'))}</p>
          <p className=""><strong>Model Type:</strong> {props.device.modelType.toUpperCase()}</p>
        </div>
      </div>
      </div>
    )
}

export default Device
