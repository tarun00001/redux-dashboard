import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {loginReducer} from '../reducers/loginReducer'
import {logoutReducer} from '../reducers/logoutReducer'
import {registerReducer} from '../reducers/registerReducer'
import {profileReducer} from '../reducers/profileReducer'
import {homeAvgReportReducer,homeAvgReportReducerPrev,homeTodayIntakeReducer,homeDeviceDetailReducer,homeMonthlyAvgReportReducer} from '../reducers/homeReducer'

const rootReducer = combineReducers({
    registerReducer: registerReducer,
    loginReducer: loginReducer,
    logoutReducer: logoutReducer,
    profileReducer: profileReducer,
    homeAvgReportReducer: homeAvgReportReducer,
    homeAvgReportReducerPrev: homeAvgReportReducerPrev,
    homeTodayIntakeReducer: homeTodayIntakeReducer,
    homeDeviceDetailReducer: homeDeviceDetailReducer,
    homeMonthlyAvgReportReducer: homeMonthlyAvgReportReducer

})

const initialState = {}

const middleware = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;