const getWeather = require("../middleware/getWeather")
const Cache = require("../lib/cache");
const csvHelpers = require("../lib/csvHelpers")

const getAlerts = async (req, res) => {
  let alertsTable={}
    if (!Cache.has("alertsTable")) {
      throw "Error: no cache table"
    }
    alertsTable = Cache.get("alertsTable")
  console.log("alertsTable in getAlerts-->", alertsTable)

  for (const key in alertsTable) {
      const result = await getWeather(key)
      console.log("getAlerts--->key", key)
      console.log("getAlerts--->result", result)
      const tableEntry = csvHelpers.updateTableEntry(result, alertsTable[key])
      alertsTable[key] = {...alertsTable[key],...tableEntry }
  }
  Cache.set("alertsTable", alertsTable)
  const sortedTable = csvHelpers.sortTable(alertsTable)
  res.send(sortedTable)
  // res.send([{city: "a1", status: false},{city: "a2", status: true}])
}
module.exports = getAlerts


  // read cache - to know what to call in weather api
  // getWeather()
  // sort response data
  // update cache with response
  // send response to client