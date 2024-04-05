const express = require("express");
const app = express();
require("dotenv").config({ path: "./.dnv" });
const http = require("http");
const Router = require("./routes/route");
const cors = require("cors");
const port = process.env.PORT || 8800;
app.use(cors());
app.use(express.json());
app.use("/", Router);
http
  .createServer(app)
  .listen(port, () => console.log(`Server is running on port ${port}`))
  .on("err", (err) => console.log("error running server"));
