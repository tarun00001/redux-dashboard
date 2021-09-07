
const initialState = {  
    user: null,
    error: null
}

export const loginReducer = (state=initialState,action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST' :
            return{
                ...state
        }
        case 'LOGIN_SUCCESS' :
            return {
                ...state,
                user: action.payload
            }
        case 'LOGIN_FAILURE' :
            return {
                    error: action.payload
                } 
        default : 
            return state                                                  
    }
}