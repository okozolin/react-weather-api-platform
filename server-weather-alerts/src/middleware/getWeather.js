const fetch = require("axios")
const Cache = require("../lib/cache");

async function getWeather(location) {
    const KEY = process.env.OPENWEATHERMAP_API_KEY
    try {
      const weather = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${KEY}`
      );
      return weather.data
    } catch (err) {
        throw new Error(`Error: ${err}`);
  }
}
module.exports = getWeather;