import React from 'react'
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux';
import {logoutAction} from '../actions/logoutAction'
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';

const cookies = new Cookies();

const SideBar = (props) => {
  const history = useHistory()
console.log(props)
// console.log(props.user.token)
// const token = props.user.token
    function logout() {
        props.logoutAction();
        cookies.remove('token');
        history.push('/Login')
    }

    return (
        <div>
            
<button style={{ marginTop: "10px" }} className="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
toggle
</button>

<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
<div className="offcanvas-header">
  <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div className="offcanvas-body">
 
  <div className="dropdown mt-3">
    <ul className="ul">
  {(() => {
              if (!cookies.get("token")) {
                return [
                  <li className="active" style={{}} >
                    <NavLink className="nav-link" to="/Login">
                   <span className="dis"><i className="fas fa-sign-in-alt"></i> Login</span>
                    </NavLink>
                  </li>,
                  <li className="active">
                    <NavLink className="nav-link" to="/Signup">
                    <span className="dis"><i className="fas fa-user-plus"></i> Register</span>
                    </NavLink>
                  </li>
                ];
              
              } else {
                return [
                  <li className="active">
                  <NavLink className="nav-link" to="/">
                  <span className="pro"><i className="fas fa-home"></i> Home</span>
                  </NavLink>
                </li>,
                <li className="active">
                  <NavLink className="nav-link" to="/Profile">
                  <span className="pro"> <i className="far fa-id-card"></i> Profile</span>
                  </NavLink>
                </li>,
               
                <li className="nav-link active logo"
                  onClick={() => {
                    logout();
                  }}>
                  <span className=""><i className="fas fa-sign-out-alt"></i> Logout</span>
                </li>,
                 
                ];
              }
            })()}
            </ul>
  </div>
</div>
</div>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    user : state.loginReducer.user
  }
}

export default connect(mapStateToProps, {logoutAction}) (SideBar)
