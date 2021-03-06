import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import router from "./routes";
import "./database/connect";

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

export default app;
