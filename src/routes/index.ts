import processing from "./api/processing";
import express from "express";
import { Request, Response } from "express";
const routes = express.Router();

//routing the main route of the application
routes.get("/", (req: Request, res: Response): void => {
  res.send("main route");
});
//routing the processing route that handles the image processing
routes.use("/processing", processing);

export default routes;
