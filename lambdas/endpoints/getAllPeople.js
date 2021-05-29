"use strict";
const axios = require("axios");
const Response = require("../common/API_Response");

//get people info(swapi)
exports.handler = async (event, context, callback) => {
  await axios
    .get("https://swapi.py4e.com/api/people/")
    .then((res) => {
      callback(null, Response(200, res.data));
    })
    .catch((err) => callback(null, Response(err.statusCode, err)));
};
