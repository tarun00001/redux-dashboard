import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {homeAvgReportAction,homeAvgReportActionPrev,homeTodayIntakeAction,homeDeviceDetailAction,homeMonthlyAvgReportAction} from '../actions/homeAction'
import DeviceDetails from '../components/DeviceDetails'
import Bars from '../components/Bars'
import Graphs from '../components/Graphs'
import './home.css'

const Home = () => {
    const report = useSelector(state => state.homeAvgReportReducer.avgReport)
    const dispatchReport = useDispatch()
    const reportPrev = useSelector(state => state.homeAvgReportReducerPrev.avgReportPrev)
    const dispatchReportPrev = useDispatch()
    const intake = useSelector(state => state.homeTodayIntakeReducer.todayIntake)
    const dispatchIntake = useDispatch()
    const device = useSelector(state => state.homeDeviceDetailReducer.deviceDetail)
    const dispatchDevice = useDispatch()
    const monthly = useSelector(state => state.homeMonthlyAvgReportReducer.monthlyAvg)
    const dispatchMonthly = useDispatch()
    React.useEffect(() => {
   
        dispatchReport(homeAvgReportAction())
        dispatchReportPrev(homeAvgReportActionPrev())
        dispatchIntake(homeTodayIntakeAction())
        dispatchDevice(homeDeviceDetailAction())
        dispatchMonthly(homeMonthlyAvgReportAction())
        //console.log(props.profile)
      },[])
    console.log("r",report)
    console.log("rp",reportPrev)
    console.log("i",intake)
    console.log(device)
    console.log(monthly)
  
        { 
            if(device && monthly && intake && report && reportPrev) {
             return(   <div>
                <DeviceDetails battery={ device.battery} reservoir={ device.reservoir} patchTimestamp={ device.patchTimestamp} />,
                <Graphs glucose={monthly.glucose} basal={monthly.basal} bolus={monthly.bolus} />,
                <Bars carb={intake.carb} glucose={intake.glucose} insulin={intake.insulin} avgInsulin={report.insulin.avgInsulin} prevAvgInsulin={reportPrev.insulin.avgInsulin}/>
            
                </div>
             )}
            else{
               return( <h2>Loading...</h2>)
            }
        }
      
}

export default Home
