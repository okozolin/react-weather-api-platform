import {useState, useEffect} from "react"
import { Box, CircularProgress } from "@material-ui/core";
import Header from "./components/Header"
import AlertsTable from "./components/AlertsTable"
import Upload from "./components/Upload"
import Api from "./services/api"
import delayedCall from "./services/delay"

function App() {
  const [alerts,setAlerts] = useState([])
  const [uploaded, setUploaded] = useState(false)
  const [loader, setLoader] = useState(false)
  const hide = (typeof alerts === "object" && !Object.keys(alerts).length)
  const show =  ! hide && uploaded && !loader

  useEffect(() => {
    let intervalId
    const refreshTable = async () => {
      if (uploaded) {
        const alerts = await Api.getAlerts()
        setAlerts(alerts.data)  
        }
    }

    delayedCall(uploaded, setLoader, refreshTable)
    intervalId = setInterval(
      () => delayedCall(uploaded, setLoader, refreshTable)
    , 60000)

    return () => {
      clearInterval(intervalId)
    }
}, [uploaded])

  return (
    <>
    <Header />
    <Box m={3}>
      <Upload setUploaded={setUploaded}/>
      <Box display="flex" justifyContent="center" alignItems="center" m={4}>
      { loader && <CircularProgress />}
      </Box>
      { show && <AlertsTable alerts={alerts}/>}
    </Box>
    </>
  );
}

export default App;
