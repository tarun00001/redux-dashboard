export const registerReducer = (state={},action) => {
    switch (action.type) {
        case 'REGISTER_REQUEST' :
            return{
                ...state
        }
        case 'REGISTER_SUCCESS' :
            return {
                login: action.payload
            }
        case 'REGISTER_FAILURE' :
            return {
                    error: action.payload
                } 
        default : 
            return state                                                  
    }
}