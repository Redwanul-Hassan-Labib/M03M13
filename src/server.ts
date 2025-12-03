import express, { NextFunction, Request, Response } from "express";
import config from "./config";
import initDB, { pool } from "./config/db";
import logger from "./middleware/logger";
import { userRoute } from "./module/users/user.routes";
import { todoRoute } from "./module/todos/todo.routes";
import { userAuth } from "./module/auth/auth.routes";

const app = express();
const port = config.port;
// parser
app.use(express.json());
// app.use(express.urlencoded());

// initializing DB
initDB();

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello Next Level Developers!");
});

//!users CRUD
app.use("/users", userRoute )


//! todo crud
app.use("/todos", todoRoute)

//! auth routes

app.use("/auth", userAuth)


app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.path,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});