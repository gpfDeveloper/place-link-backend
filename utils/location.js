const axios = require("axios");

const HttpError = require("../models/http-error");

const API_KEY = process.env.MAP_KEY;

async function getCoordsForAddress(address) {
  const coordinates = {lat: 0, lng: 0}
  const response = await axios.get(
    `http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${encodeURIComponent(
      address
    )}`
  );
  const data = response.data?.data;

  if (!data || data.length === 0) {
    const error = new HttpError(
      "Could not find location for the specified address.",
      422
    );
    throw error;
  }

  coordinates.lat = data[0].latitude;
  coordinates.lng = data[0].longitude;

  return coordinates;
}

module.exports = getCoordsForAddress;
