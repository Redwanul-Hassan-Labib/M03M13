import { Request, Response } from "express";
import { loginUserService } from "./auth.service";


const loginUser = async (req:Request, res:Response)=>{
    const {email, password} = req.body;

    try {
        const result = await loginUserService.loginUser(email, password);
        res.status(200).json({
          success: false,
          message: "password login",
          data: result,
        });
      } catch (err: any) {
        res.status(500).json({
          success: false,
          message: err.message,
        });
      }
    }
    
export const loginUserController = {
    loginUser,
}