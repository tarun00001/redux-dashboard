import React, { useState } from 'react';
import {connect} from 'react-redux';
import {loginAction} from '../actions/loginAction'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();


const Login = (props) => { 
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [emailError,setEmailError] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const history = useHistory()

    function login(e){
       
        e.preventDefault();
        const isValid = validate();
      // console.log(isValid)
     
        if( email && password){

          props.loginAction(email,password, token=>{ 
            console.log("tokenfrom cb: ", token)
            if (token) {
              history.push('/')
            }
           })
         
        //  authToken = props.loginReducer.token
        // console.log( cookies.get('token'))
        //  console.log("token1" , props.loginReducer.token)
        // console.log(props.loginReducer.login)
              // history.push('/')
            
        }        
    }

    const validate = () => {
    
      let emailError = "";
      let passwordError = "";
  
      if(!email.includes('@')){  
        emailError = "Invalid Email"
      }
  
      if(!password){  
        passwordError = "Password cannot be blank"
      }

      if(emailError || passwordError) {  
        setEmailError(emailError)
        setPasswordError(passwordError)
        return false;
      }
      return true;
    }

    return (
        <div>
        <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2" size="lg">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" bsSize="lg" value={email} onChange={(e)=> {setEmail(e.target.value);}}/>
          {emailError ? <div style={{fontSize: 12, color: 'red'}}>{emailError}</div> : ''}
         
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2" size="lg">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" bsSize="lg" value={password} onChange={(e)=> {setPassword(e.target.value)}}/>
          {passwordError ? <div style={{fontSize: 12, color: 'red'}}>{passwordError}</div> : ''}
          {
            props.error ? <small style={{fontSize: 12, color: 'red'}}>{props.error }</small> : ""
          }
        </FormGroup>
        <br/>
        <Button onClick={(e) => {login(e)}}>Submit</Button>
      </Form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      user : state.loginReducer.user,
      error: state.loginReducer.error
    }
  }

export default connect(mapStateToProps, {loginAction}) (Login)
