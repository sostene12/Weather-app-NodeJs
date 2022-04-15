const request = require("request");

const forecast = (lat, long, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=80a23852116f97e099a492c890c6b52e`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (response.body.error) {
      callback("Unavle to find location", undefined);
    } else {
      callback(undefined, response.body);
    }
  });
};

module.exports = forecast;
