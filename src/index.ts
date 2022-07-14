import express from "express";
import routes from "./routes";

//conventional way to create an express app
const app = express();
const port = 3000;
//routing the main route of the application
app.use("/api", routes);

//listening on port 3000
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

export default app;
