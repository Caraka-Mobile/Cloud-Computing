const { getHome } = require("./handlers");

routes = [
  {
    method: "GET",
    path: "/",
    handler: getHome,
  },
];
