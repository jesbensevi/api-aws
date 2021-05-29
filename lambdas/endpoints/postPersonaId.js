"use strict";
const AWS = require("aws-sdk");
const axios = require("axios");
const Response = require("../common/API_Response");
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });

const startwarsTable = process.env.STARTWARS_TABLE;

exports.handler = async (event, context, callback) => {
  const id = event.pathParameters.id;

  await axios
    .get(`https://swapi.py4e.com/api/people/${id}/`)
    .then((res) => {
      const dataApi = {
        id: id,
        nombre: res.data.name,
        altura: res.data.height,
        peso: res.data.mass,
        color_pelo: res.data.hair_color,
        color_piel: res.data.skin_color,
        color_ojos: res.data.eye_color,
        anio_nacimiento: res.data.birth_day,
        genero: res.data.gender,
        mundo_natal: res.data.homeworld,
        peliculas: res.data.films,
        especie: res.data.species,
        vehiculos: res.data.vehicles,
        naves_espaciales: res.data.starships,
        creado: res.data.created,
        editado: res.data.edited,
        url: res.data.url,
      };

      return db
        .put({
          TableName: startwarsTable,
          Item: dataApi,
        })
        .promise()
        .then(() => {
          callback(null, Response(201, dataApi));
        })
        .catch((err) => Response(null, Response(err.statusCode, err)));
    })
    .catch((err) => Response(null, Response(err.statusCode, err)));
};
