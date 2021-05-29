"use strict";
const axios = require("axios");
const Response = require("../common/API_Response");

//getInfoById(swapi)
exports.handler = async (event, context, callback) => {
  const id = event.pathParameters.id;
  await axios
    .get(`https://swapi.py4e.com/api/people/${id}/`)
    .then((res) => {
      callback(null, Response(200, res.data));
    })
    .catch((err) => callback(null, Response(err.statusCode, err)));
};
