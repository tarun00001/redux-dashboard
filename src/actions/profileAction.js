
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const profileAction = () => async (dispatch) => {
    dispatch({type: 'PROFILE_REQUEST'})
    try {
     
        const response = await  axios({
            method: "GET",
            url: "https://insulink-backend.herokuapp.com/api/v1/users/myProfile",
            headers: { Authorization: `Bearer ${cookies.get("token")}`, },
          })
        console.log(response)
        dispatch({type: 'PROFILE_SUCCESS',payload: response.data.data.user})
    
    }catch(err){
        dispatch({type: 'PROFILE_FAILURE', payload: err})
    }
   
}

