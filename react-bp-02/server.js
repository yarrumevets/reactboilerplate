import config from "./config.js";
import express from "express";
const app = express();
app.use(express.static("dist"));
app.listen(config.SERVER_PORT, () => {
  console.log(`Server is running on port ${config.SERVER_PORT}`);
});
