import express, { Request, Response } from "express"
import { pool } from "../../config/db";
import { userController } from "./user.comtroller";


const routes = express.Router()

routes.post("/", userController.postUserController)

routes.get("/" ,  userController.getUserController)

routes.get("/:id", userController.singleGetUserController)

routes.put("/:id", userController.putUserController)

routes.delete("/:id", userController.deleteUserController)

export const userRoute = routes;