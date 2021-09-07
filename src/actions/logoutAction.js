
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const logoutAction = () => async (dispatch) => {
  
    dispatch({type: 'LOGOUT_REQUEST'})
    try {
     
        const response = await  axios({
            method: "GET",
            url: "https://insulink-backend.herokuapp.com/api/v1/auth/logout",
            headers: { Authorization: `Bearer ${cookies.get("token")}` },
          
          })
        console.log(response)
        dispatch({type: 'LOGOUT_SUCCESS',payload: response})
        cookies.remove('token');
        
    }catch(err){
        dispatch({type: 'LOGOUT_FAILURE', payload: err})
    }
   
}

