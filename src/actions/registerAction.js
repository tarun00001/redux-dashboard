
import axios from 'axios';


export const registerAction = (firstName,lastName,email,password,phone,country,gender) => async (dispatch) => {
    dispatch({type: 'REGISTER_REQUEST'})
    try {
        const registerData = JSON.stringify({firstName,lastName,email,password,phone,country,gender});
        console.log(registerData)
        const response = await  axios({
            method: "POST",
            url: "https://insulink-backend.herokuapp.com/api/v1/auth/signup",
            headers: { "Content-Type": "application/json" },
            data: registerData,
          })
        console.log(response)
        dispatch({type: 'REGISTER_SUCCESS',payload: response})
      
    }catch(err){
        dispatch({type: 'REGISTER_FAILURE', payload: err})
    }
   
}

