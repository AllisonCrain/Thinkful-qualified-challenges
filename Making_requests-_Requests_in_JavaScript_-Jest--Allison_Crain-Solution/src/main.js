const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function getAllNames() {
  return axios.get(`${BASE_URL}/constellations`).then((response) => {
    const names = response.data.map((constellations) => constellations.name);
    console.log(names);
  });
}


function getConstellationsByQuadrant(quadrant) {
  return axios.get(`${BASE_URL}/constellations`).then((response) => {
    const result = response.data.filter((constellations) => constellations.quadrant === quadrant);
    console.log(result);
  });
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
