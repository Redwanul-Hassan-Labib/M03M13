import express from "express";
import { todocontroller } from "./todo.controller";


const route = express.Router()

route.get("/", todocontroller.getTodoController)

route.post("/", todocontroller.postTodoController)

route.get("/:id", todocontroller.singleGetTodoController)

route.put("/:id", todocontroller.putTodoController)

route.delete("/:id", todocontroller.deleteTodoController)




export const todoRoute = route;