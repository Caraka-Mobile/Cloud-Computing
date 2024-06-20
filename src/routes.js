const { getHome, registration, login} = require("./handlers");
const { getUserProfileHandler } = require("../service/getProfile");

routes = [
  {
    method: "GET",
    path: "/",
    handler: getHome,
  },
  {
    method: "GET",
    path: "/profile",
    // options: {
    //   auth: false
    // },
    handler: getUserProfileHandler,
  },
  {
    method: "POST",
    path: "/registration",
    options: {
      auth: false
    },
    handler: registration,
  },
  {
    method: "POST",
    path: "/login",
    options: {
      auth: false
    },
    handler: login,
  }
];

module.exports = routes;
