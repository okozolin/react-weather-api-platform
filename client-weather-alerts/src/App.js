import { Box, Button } from "@material-ui/core";
import Header from "./components/Header"
import AlertsTable from "./components/AlertsTable"
import Upload from "./components/Upload"

function App() {
  return (
    <>
    <Header />
    <Box m={3}>
      <Upload />
      <AlertsTable />
    </Box>
    </>
  );
}

export default App;
