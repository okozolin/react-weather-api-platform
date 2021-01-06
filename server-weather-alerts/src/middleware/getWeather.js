const fetch = require("axios")
const Cache = require("../lib/cache");

async function getWeather(location) {
    const KEY = process.env.OPENWEATHERMAP_API_KEY
    try {
      const weather = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${KEY}`
      );
      console.log("getWeather---->", weather.data);
      return weather.data
        } catch (err) {
    throw new Error(`Error: ${err}`);
  }
}

// const getWeatherMiddlware = async (req, res, next) => {
//     if (!Cache.has("alertsTable") || Cache.isExpired("alertsTable", 20)) {
//       const response = await getWeather("Madrid, ES");
//       console.log("getWeather response:--->", response);
//       Cache.set("alertsTable", response);
//     }
//     next();
//   };
  
module.exports = getWeather;