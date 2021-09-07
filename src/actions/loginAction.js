
import axios from 'axios';

import Cookies from 'universal-cookie';

const cookies = new Cookies();
let authToken = null;

export const loginAction = (email,password,cb) => async (dispatch) => {
   
    dispatch({type: 'LOGIN_REQUEST'})
    try {
        // const loginData = JSON.stringify({email,password});
        // console.log(loginData)
        const response = await  axios({
            method: "POST",
            url: "https://insulink-backend.herokuapp.com/api/v1/auth/loginUsingEmail",
           
                headers: { "Content-Type": "application/json" },
                data: { email: email, password: password}
       
          
          })
        console.log(response)
        localStorage.setItem('token',response.data.data.user.token)
        console.log('before dispatch')
        dispatch({type: 'LOGIN_SUCCESS',payload: response.data.data.user})
        console.log('after dispatch')
        authToken = response.data.data.user.token
        // console.log(authToken)
        cookies.set('token', authToken)
        cb(authToken)
        console.log('after cb')
        // console.log(cookies.get('token'))
        
    }catch(err){
        dispatch({type: 'LOGIN_FAILURE', payload: err.response.data.data.err.msg})
    }
   
}

