export const homeAvgReportReducer = (state={},action) => {
    // console.log(action.payload)
    // console.log(action.type)
    switch (action.type) {
        case 'HOME_AVG_REPORT_REQUEST' :
            return{
                ...state
        }
        case 'HOME_AVG_REPORT_SUCCESS' :
            return {
                ...state,
                avgReport: action.payload
            }
        case 'HOME_AVG_REPORT_FAILURE' :
            return {
                    error: action.payload
                } 
        default : 
            return state                                                  
    }
}

export const homeAvgReportReducerPrev = (state={},action) => {
    // console.log(action.payload)
    // console.log(action.type)
    switch (action.type) {
        case 'HOME_AVG_REPORT_REQUEST_PREV' :
            return{
                ...state
        }
        case 'HOME_AVG_REPORT_SUCCESS_PREV' :
            return {
                ...state,
                avgReportPrev: action.payload
            }
        case 'HOME_AVG_REPORT_FAILURE_PREV' :
            return {
                    error: action.payload
                } 
        default : 
            return state                                                  
    }
}

export const homeTodayIntakeReducer = (state={},action) => {
    // console.log(action.payload)
    // console.log(action.type)
    switch (action.type) {
        case 'HOME_TODAY_INTAKE_REQUEST' :
            return{
                ...state
        }
        case 'HOME_TODAY_INTAKE_SUCCESS' :
            return {
                ...state,
                todayIntake: action.payload
            }
        case 'HOME_TODAY_INTAKE_FAILURE' :
            return {
                    error: action.payload
                } 
        default : 
            return state                                                  
    }
}

export const homeDeviceDetailReducer = (state={},action) => {
    // console.log(action.payload)
    // console.log(action.type)
    switch (action.type) {
        case 'HOME_DEVICE_DETAIL_REQUEST' :
            return{
                ...state
        }
        case 'HOME_DEVICE_DETAIL_SUCCESS' :
            return {
                ...state,
                deviceDetail: action.payload
            }
        case 'HOME_DEVICE_DETAIL_FAILURE' :
            return {
                    error: action.payload
                } 
        default : 
            return state                                                  
    }
}

export const homeMonthlyAvgReportReducer = (state={},action) => {
    // console.log(action.payload)
    // console.log(action.type)
    switch (action.type) {
        case 'HOME_MONTHLY_AVG_REPORT_REQUEST' :
            return{
                ...state
        }
        case 'HOME_MONTHLY_AVG_REPORT_SUCCESS' :
            return {
                ...state,
                monthlyAvg: action.payload
            }
        case 'HOME_MONTHLY_AVG_REPORT_FAILURE' :
            return {
                    error: action.payload
                } 
        default : 
            return state                                                  
    }
}