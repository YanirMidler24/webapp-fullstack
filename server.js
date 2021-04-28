const express = require("express");
var cors = require("cors");
const PORT = process.env.PORT || 9000;
const dataRoute = require("./routers/dataRoute");
const bodyParser = require("body-parser");

var app = express();
app.use(cors());

require("./DBconfig/config");

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/data", dataRoute);

app.listen(PORT, function () {
  console.log(`server is running on port ${PORT}`);
});
