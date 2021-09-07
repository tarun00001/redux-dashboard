export const profileReducer = (state={},action) => {
    console.log(action.payload)
    console.log(action.type)
    switch (action.type) {
        case 'PROFILE_REQUEST' :
            return{
                ...state
        }
        case 'PROFILE_SUCCESS' :
            return {
                ...state,
                profile: action.payload
            }
        case 'PROFILE_FAILURE' :
            return {
                    error: action.payload
                } 
        default : 
            return state                                                  
    }
}