import React from 'react'
import Device from "../components/Device";
import {useDispatch, useSelector } from 'react-redux'
import {profileAction} from '../actions/profileAction'
import ErrorBoundary from './ErrorBoundary'

const Profile = (props) => {

  const profile = useSelector(state => state.profileReducer)
 const dispatch = useDispatch()
  React.useEffect(() => {
   
    dispatch(profileAction())
    //console.log(props.profile)
  },[])


  // console.log(profile.profile.firstName)
    
      {
        if (profile.profile) {
          return ( <div className="row profile">
          <div className="col-lg-12 ">
            <div className="card">
              <div className="card-body">
              
                <h5 className="">
               <strong>Name:</strong> {profile.profile.firstName} {profile.profile.lastName}
                </h5>
                <p className="card-text"><strong>Email:</strong> {profile.profile.email}</p>
                <p className=""><strong>Country:</strong> {profile.profile.country.toUpperCase()}</p>
                <p className=""><strong>Phone:</strong> {profile.profile.phone}</p>
                </div>
              </div>
            </div>
            {profile.profile.devices ? profile.profile.devices.map((device) => {
              return (<ErrorBoundary> <Device device={device} key={device._id}/></ErrorBoundary>
              )
            }): <p>No devices found</p>}
            </div>   
            )
        }
        else{
          return( <h2>Loading...</h2>)
       }
      }
  
}

export default (Profile)
