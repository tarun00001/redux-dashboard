import React from 'react'
import DeviceDetail from './DeviceDetail'

const DeviceDetails = (props) => {
    return (
       
       
        <div className="row home">
       
          <DeviceDetail detail={props.battery} src={"images/battery.png"} title="Battery" />
          <DeviceDetail detail={props.reservoir}  src={"images/water.png"} title="Reservoir" />
          <DeviceDetail detail={props.patchTimestamp} src={"images/patch.png"} title="Patch" />
        </div>
   
       
    )
}

export default DeviceDetails
