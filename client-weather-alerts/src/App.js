import {useState} from "react"
import { Box, Button } from "@material-ui/core";
import Header from "./components/Header"
import AlertsTable from "./components/AlertsTable"
import Upload from "./components/Upload"

function App() {
  const [alerts,setAlerts] = useState([])
  return (
    <>
    <Header />
    <Box m={3}>
      <Upload setAlerts={setAlerts}/>
      <AlertsTable alerts={alerts}/>
    </Box>
    </>
  );
}

export default App;
