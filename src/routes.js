const { getHome, registration, login} = require("./handlers");

routes = [
  {
    method: "GET",
    path: "/",
    handler: getHome,
  },
  // {
  //   method: "GET",
  //   path: "/profile/{userId}",
  //   handler: getProfile,
  // },
  {
    method: "POST",
    path: "/registration",
    handler: registration,
  },
  {
    method: "POST",
    path: "/login",
    handler: login,
  }
];

module.exports = routes;
