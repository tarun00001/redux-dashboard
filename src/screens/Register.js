import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {registerAction} from '../actions/registerAction'

const Register = (props) => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [country,setCountry] = useState("");
    const [gender,setGender] = useState("");
    const [firstNameError,setFirstNameError] = useState("");
    const [lastNameError,setLastNameError] = useState("");
    const [emailError,setEmailError] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const [phoneError,setPhoneError] = useState("");
    const [countryError,setCountryError] = useState("");
    const [genderError,setGenderError] = useState("");
    
    const register = (e) => {
      console.log(e);
      e.preventDefault();
      const isValid = validate();
      console.log(isValid)
      if(isValid) {
        console.log(firstName,lastName,email,password,phone,country,gender)
      } 
      if(firstName && lastName && email && password && phone && country && gender ){
        props.registerAction(firstName,lastName,email,password,phone,country,gender);
    }
    }

   const validate = () => {
      let firstNameError = "";
      let lastNameError = "";
      let emailError = "";
      let passwordError = "";
      let phoneError = "";
      let countryError = "";
      let genderError = ""; 
   
      if(!firstName){  
        firstNameError = "First Name cannot be blank"
      }
  
      if(!lastName){  
        lastNameError = "Last Name cannot be blank"
      }
  
      if(!email.includes('@')){  
        emailError = "Invalid Email"
      }
  
      if(!password){  
        passwordError = "Password cannot be blank"
      }
  
      if(!phone){  
        phoneError = "Phone cannot be blank"
      }
  
      if(!country){  
        countryError = "Country cannot be blank"
      }
  
      if(!gender){  
        genderError = "Gender cannot be blank"
      }
  
      if(firstNameError || lastNameError || emailError || passwordError || phoneError || countryError || genderError) {  
        setFirstNameError(firstNameError)
        setLastNameError(lastNameError)
        setEmailError(emailError)
        setPasswordError(passwordError)
        setPhoneError(phoneError)
        setGenderError(countryError)
        setCountryError(genderError)
        return false;
      }
      return true;
    }

    return (
      <div className="container">
      <form className="register">
      <div className="form-row">
      <h1>Register a new account</h1>
      <div class="form-group col-md-12">
          <input
            type="text"
            required
            className="form-control"
            placeholder="First Name"
            value={firstName}
            onChange={(e) =>{setFirstName(e.target.value);
            }}
          />
          {firstNameError ? <div style={{fontSize: 12, color: 'red'}}>{firstNameError}</div> : ''}
          </div>
          <br />
          <div class="form-group col-md-12">
          <input
            type="text"
            required
            className="form-control"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {setLastName(e.target.value);
            }}
          />
          {lastNameError ? <div style={{fontSize: 12, color: 'red'}}>{lastNameError}</div> : ''}
          </div>
          <br />
          <div class="form-group col-md-12">
          <input
            type="email"
            required
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => {setEmail(e.target.value);
            }}
          />
          {emailError ? <div style={{fontSize: 12, color: 'red'}}>{emailError}</div> : ''}
          </div>
          <br />
          <div class="form-group col-md-12">
          <input
            type="password"
            required
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) =>{setPassword(e.target.value);
            }}
          />
          {passwordError ? <div style={{fontSize: 12, color: 'red'}}>{passwordError}</div> : ''}
          </div>
          <br />
          <div class="form-group col-md-12">
          <input
            type="text"
            required
            className="form-control"
            placeholder="Phone"
            value={phone}
            onChange={(e) =>{setPhone(e.target.value);
            }}
          />
          {phoneError ? <div style={{fontSize: 12, color: 'red'}}>{phoneError}</div> : ''}
          </div>
          <br />
          <div class="form-group col-md-12">
          <input
            type="text"
            required
            className="form-control"
            placeholder="Country"
            value={country}
            onChange={(e) => {setCountry(e.target.value);
            }}
          />
          {countryError ? <div style={{fontSize: 12, color: 'red'}}>{countryError}</div> : ''}
          </div>
          <br />
          <div class="form-group col-md-12">
        
          <select
          required
          className="form-control"
            value={gender}
            onChange={(e) =>{setGender(e.target.value);}}
          >
            <option value="">Choose Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Other</option>
          </select>
          {genderError ? <div style={{fontSize: 12, color: 'red'}}>{genderError}</div> : ''}
          </div>
          <br />
          
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => {register(e);}}>
            Register
          </button>
          </div>
        </form>
        
        <Link className="register" to="/Login" variant = "body2">
           Already have an account ? Login here 
        </Link>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {registerReducer : state.registerReducer}
}

export default connect(null, {registerAction}) (Register)