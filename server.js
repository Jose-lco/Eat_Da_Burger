let express = require("express");
let app = express();
let exphbs = require("express-handlebars");
let routes = require("./controllers/burgers_controllers.js");
let PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
