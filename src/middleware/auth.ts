//! higher order component create .

import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken";
import config from "../config";

const loginAuth = ()=>{
    return (req:Request, res:Response, Next:NextFunction)=>{
        const token = req.headers.authorization;
        if (!token) {
            return res.status(500).json({message: "You are not allowed"})
        }
        const decorded = jwt.verify(token, config.secrete as string)

        console.log({decorded})
        Next()
    }
    

}

export default loginAuth