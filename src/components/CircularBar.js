import React from 'react'

const CircularBar = (props) => {
    const circularRef = React.useRef(null);
    React.useEffect(() => {
        circularRef.current.style.transform = `rotate(${props.data && props.data !== '_' ? props.data : 0}deg)`
    
    })
    return (
  
        <div className="card">
        <div className="card-body">
     
              <h5>{props.title}</h5>
              <div className="progress-circle p10">
              <span>{props.data} {props.unit}</span>
              <div className="left-half-clipper">
                 <div className="first50-bar"></div>
                 <div ref={circularRef} className="value-bar"></div>
              </div>
           </div>
           
        </div>
        </div>
  
    )
}

export default CircularBar
