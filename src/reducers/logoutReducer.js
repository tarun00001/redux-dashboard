export const logoutReducer = (state={},action) => {
    switch (action.type) {
        case 'LOGOUT_REQUEST' :
            return{
                ...state
        }
        case 'LOGOUT_SUCCESS' :
            return {
                login: action.payload
            }
        case 'LOGOUT_FAILURE' :
            return {
                    error: action.payload
                } 
        default : 
            return state                                                  
    }
}