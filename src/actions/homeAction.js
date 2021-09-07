
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const homeAvgReportAction = () => async (dispatch) => {
    dispatch({type: 'HOME_AVG_REPORT_REQUEST'})
    try {
     
        const response = await  axios({
            method: "GET",
            url: `https://insulink-backend.herokuapp.com/api/v1/dashboard/get-avg-report?startDate=${new Date(Date.now() - 604800000).toISOString().slice(0,10)}&endDate=${new Date().toISOString().slice(0, 10)}`,
            headers: { Authorization: `Bearer ${cookies.get("token")}`, },
          })
        console.log(response)
        dispatch({type: 'HOME_AVG_REPORT_SUCCESS',payload: response.data.data})
    
    }catch(err){
        dispatch({type: 'HOME_AVG_REPORT_FAILURE', payload: err})
    }
   
}

export const homeAvgReportActionPrev = () => async (dispatch) => {
    dispatch({type: 'HOME_AVG_REPORT_REQUEST_PREV'})
    try {
     
        const response = await  axios({
            method: "GET",
            url: `https://insulink-backend.herokuapp.com/api/v1/dashboard/get-avg-report?startDate=${new Date(Date.now() - 1209600000).toISOString().slice(0,10)}&endDate=${new Date(Date.now() - 604800000).toISOString().slice(0,10)}`,
            headers: { Authorization: `Bearer ${cookies.get("token")}`, },
          })
        console.log(response)
        dispatch({type: 'HOME_AVG_REPORT_SUCCESS_PREV',payload: response.data.data})
    
    }catch(err){
        dispatch({type: 'HOME_AVG_REPORT_FAILURE_PREV', payload: err})
    }
   
}

export const homeTodayIntakeAction = () => async (dispatch) => {
    dispatch({type: 'HOME_TODAY_INTAKE_REQUEST'})
    try {
     
        const response = await  axios({
            method: "GET",
            url: "https://insulink-backend.herokuapp.com/api/v1/dashboard/today-intake",
            headers: { Authorization: `Bearer ${cookies.get("token")}`, },
          })
        console.log(response)
        dispatch({type: 'HOME_TODAY_INTAKE_SUCCESS',payload: response.data.data})
    
    }catch(err){
        dispatch({type: 'HOME_TODAY_INTAKE_FAILURE', payload: err})
    }
   
}


export const homeDeviceDetailAction = () => async (dispatch) => {
    dispatch({type: 'HOME_DEVICE_DETAIL_REQUEST'})
    try {
     
        const response = await  axios({
            method: "GET",
            url: "https://insulink-backend.herokuapp.com/api/v1/dashboard/get-updated-device-details",
            headers: { Authorization: `Bearer ${cookies.get("token")}`, },
          })
        console.log(response)
        dispatch({type: 'HOME_DEVICE_DETAIL_SUCCESS',payload: response.data.data.device})
    
    }catch(err){
        dispatch({type: 'HOME_DEVICE_DETAIL_FAILURE', payload: err})
    }
   
}


export const homeMonthlyAvgReportAction = () => async (dispatch) => {
    dispatch({type: 'HOME_MONTHLY_AVG_REPORT_REQUEST'})
    try {
     
        const response = await  axios({
            method: "GET",
            url: "https://insulink-backend.herokuapp.com/api/v1/dashboard/get-monthly-avg-report/12",
            headers: { Authorization: `Bearer ${cookies.get("token")}`, },
          })
        console.log(response)
        dispatch({type: 'HOME_MONTHLY_AVG_REPORT_SUCCESS',payload: response.data.data})
    
    }catch(err){
        dispatch({type: 'HOME_MONTHLY_AVG_REPORT_FAILURE', payload: err})
    }
   
}


