const indexR = require("./index");
const usersR = require("./users");
const toysR = require("./toys");
const cookiesR = require("./cookies");
const categoriesR = require("./categories");
const drinksR = require("./drinks")

exports.routesInit = (app) => {
  // הגדרת ראוטים לאיזה ראוטר הם שייכים
  app.use("/", indexR);
  app.use("/users", usersR);
  app.use("/toys", toysR);
  app.use("/cookies", cookiesR);
  app.use("/categories", categoriesR);
  app.use("/drinks", drinksR);
};
