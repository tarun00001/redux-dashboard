import React from 'react';

const ProgressBar = (props) => {
  const progressRef = React.useRef(null);
  React.useEffect(() => {
    progressRef.current.style.width = `${props.data}%`
  })
    return (
    
      <div className="card">
      <div className="card-body">
    
            <div>
            <h1>{props.title}</h1>
              <h5>Average Insulin</h5>
              <div className="progress">
                <div ref={progressRef} className="progress-bar" role="progressbar" style={{width: `${props.data}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>{(Math.round(props.data * 100) / 100).toFixed(2)}
              </div>
            </div>
        
      </div>
      </div>
   
    )
}

export default ProgressBar
