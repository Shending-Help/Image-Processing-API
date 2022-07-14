import processing from "./api/processing";
import express from "express";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("main route");
});

routes.use("/processing", processing);
//routes.use("/processing", searcher);
export default routes;
