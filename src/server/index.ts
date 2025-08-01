import express from "express";
import ViteExpress from "vite-express";
import { config } from "dotenv";
import routes from "./routes";

config();

const PORT = Number(process.env.PORT || 3000);
const app = express();
app.use(express.json());

app.use("/api", routes);

ViteExpress.listen(app, PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
