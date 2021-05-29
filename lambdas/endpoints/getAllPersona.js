"use strict";
const AWS = require("aws-sdk");
const Response = require("../common/API_Response");
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });

const startwarsTable = process.env.STARTWARS_TABLE;

exports.handler = (event, context, callback) => {
  return db
    .scan({
      TableName: startwarsTable,
    })
    .promise()
    .then((res) => {
      callback(null, Response(200, res.Items));
    })
    .catch((err) => callback(null, Response(err.statusCode, err)));
};
