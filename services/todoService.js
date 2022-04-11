const axios = require("axios");
require("dotenv").config();

const todoService = () => {
  console.log("Real Todos");
  return axios.get(`${process.env.todosURL}`).then((result) => {
    return result.data;
  });
};

const todoServiceById = (id) => {
  console.log("Real Todo by ID");
  return axios.get(`${process.env.todosURL}${id}`).then((result) => {
    return result.data;
  });
};

module.exports = {
  todoService,
  todoServiceById,
};
