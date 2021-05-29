"use strict";
const AWS = require("aws-sdk");
const Response = require("../common/API_Response");
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });

const startwarsTable = process.env.STARTWARS_TABLE;

exports.handler = (event, context, callback) => {
  const id = event.pathParameters.id;
  const params = {
    Key: {
      id: id,
    },
    TableName: startwarsTable,
  };

  return db
    .get(params)
    .promise()
    .then((res) => {
      if (res.Item) callback(null, Response(200, res.Item));
      else callback(null, Response(404, { error: "data not found" }));
    })
    .catch((err) => callback(null, Response(err.statusCode, err)));
};
