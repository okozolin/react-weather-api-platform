const getWeather = require("../middleware/getWeather")
const Cache = require("../lib/cache");
const TableHelpers = require("../lib/TableHelpers")

const getAlerts = async (req, res) => {
  let alertsTable={}
    if (!Cache.has("alertsTable")) {
      res.send({data: [], status: "No cache table"})
    }
    else {
      alertsTable = Cache.get("alertsTable")

      for (const key in alertsTable) {
        try {

          const result = await getWeather(key)
          const tableEntry = TableHelpers.updateTableEntry(result, alertsTable[key])
          alertsTable[key] = tableEntry
        } catch(err) {
            res.send(err)
          }
      }
      Cache.set("alertsTable", alertsTable)
      const sortedTable = TableHelpers.sortTable(alertsTable)
      res.send(sortedTable)
  }
}
module.exports = getAlerts