const express = require("express");
const { format } = require("express/lib/response");
const app = express();
const PORT = process.env.PORT || 8080;
require("dotenv").config();
const connectToDB = require("./models");
const LivingSpace = require("./models/LivingSpace");
const cors = require("cors");

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use(express.json());
app.use(cors());

app.route("/living-spaces").get(async (request, response) => {
  const livingspace = await LivingSpace.find({});
  response.json(livingspace);
});

connectToDB().then(() => {
  // LivingSpace.createCollection();
  app.listen(PORT, () => console.log("STARTED LISTENING ON PORT " + PORT));
});
