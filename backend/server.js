import dotenv from "dotenv/config";
import express from "express";
import path from "path";
import dbConnect from "./config/dbConnect.js";
import colors from "colors";
import userRoutes from "./routes/userRoutes.js";
import ucartRoutes from "./routes/ucartRoutes.js";
import { errHandler, notFound } from "./middlewares/errMiddleware.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dbConnect();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/users/cart", ucartRoutes);

app.get("/", (req, res) => res.send("Server is ready"));

app.use(notFound);
app.use(errHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started with PORT ${port}`.bgWhite);
});
