"use strict";

const Hapi = require("@hapi/hapi");
const Boom = require('@hapi/boom');
// const HapiAuthJwt2 = require('hapi-auth-jwt2');
require('dotenv').config();
const routes = require("./routes");
// const { verifyToken } = require("../utils/auth/auth.js");

const jwtSecret = process.env.JWT_SECRET_KEY;
// const store_data = require("./firestore");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  await server.register(require('@hapi/jwt'));

  server.auth.strategy('jwt', 'jwt', {
      keys: jwtSecret,
      verify: {
          aud: false,
          iss: false,
          sub: false,
      },
      validate: (artifacts, request, h) => {
          return {
              isValid: true,
              credentials: { user: artifacts.decoded.payload }
          };
      }
  });

  server.auth.default('jwt');

  server.route(routes);
  await server.start();

  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();

//tes
