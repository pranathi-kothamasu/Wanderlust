const axios = require("axios");

const MAPTILER_KEY = process.env.MAP_TOKEN;

module.exports.geocode = async (location, country) => {
  const searchText = `${location}, ${country}`;

  const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(searchText)}.json`;

  const response = await axios.get(url, {
    params: {
      key: MAPTILER_KEY,
      limit: 1,
    },
  });

  if (!response.data.features.length) return null;

  const [lng, lat] = response.data.features[0].geometry.coordinates;

  return [lng, lat];
};
