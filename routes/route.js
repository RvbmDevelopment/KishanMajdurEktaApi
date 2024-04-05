const exp = require("express");
const { FormSubmit, CountIncreament, Count } = require("../controllers/app");
const connectToMongoDB = require("../config/DB");
const Router = exp.Router();
connectToMongoDB();
Router.post("/auth", FormSubmit);
Router.post("/voteInc", CountIncreament);
Router.post("/voteCount", Count);
module.exports = Router;
