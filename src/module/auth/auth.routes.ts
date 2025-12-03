import { Router } from "express";
import { loginUserController } from "./auth.controller";


const authRoutes = Router()



authRoutes.post("/login", loginUserController.loginUser)



export const userAuth = authRoutes;