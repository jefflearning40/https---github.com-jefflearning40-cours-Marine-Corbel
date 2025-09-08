// charger express
import express from "express";

// charger YAML directement
import { readFileSync } from "node:fs";
import { parse } from "yaml";

// charger les routes
import router from "./routes/routes.js";
import userRouter from "./routes/user.routes.js";

// lire config.yaml
const file = readFileSync("./config.yaml", "utf8");
const config = parse(file);

const app = express();
app.use(express.json());

// brancher les routers
app.use("/hello", router);
app.use("/users", userRouter);

// récupérer les infos du YAML
const PORT = config.serveur.port;
const NOM = config.serveur.nom;

app.listen(PORT, () => {
  console.info(`${NOM} démarré sur le port ${PORT}`);
});
