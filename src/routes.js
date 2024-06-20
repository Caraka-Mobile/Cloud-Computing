const { getHome, registration, login, logout } = require("./handlers");
const { getUserProfileHandler } = require("../service/getProfile");
const { editProfile } = require("../service/editProfile");


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
  },
  {
    method: "POST",
    path: "/logout",
    handler: logout,
  },
  {
    method: "PUT",
    path: "/editProfile",
    handler: editProfile,
  }
];

module.exports = routes;
