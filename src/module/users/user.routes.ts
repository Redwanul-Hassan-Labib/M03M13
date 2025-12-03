import express, { Request, Response } from "express"
import { pool } from "../../config/db";
import { userController } from "./user.comtroller";
import loginAuth from "../../middleware/auth";


const routes = express.Router()

routes.post("/", userController.postUserController)

routes.get("/" , loginAuth(),  userController.getUserController)

routes.get("/:id", userController.singleGetUserController)

routes.put("/:id", userController.putUserController)

routes.delete("/:id", userController.deleteUserController)

export const userRoute = routes;