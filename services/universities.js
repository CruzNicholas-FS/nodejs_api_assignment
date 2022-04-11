const axios = require("axios");
require("dotenv").config();

const allUniversities = () => {
  console.log("All Universities");
  return axios.get(`${process.env.universitiesURL}`).then((result) => {
    return result.data;
  });
};

const universitiesByName = (name) => {
  console.log("University by name");
  return axios
    .get(`${process.env.universitiesURL}${process.env.searchByName}${name}`)
    .then((result) => {
      return result.data;
    });
};

module.exports = {
  allUniversities,
  universitiesByName,
};
