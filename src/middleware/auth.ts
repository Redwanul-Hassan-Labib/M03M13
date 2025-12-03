//! higher order component create .

import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { error } from "console";

const loginAuth = (...roles: string[]) => {
  return (req: Request, res: Response, Next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(500).json({ message: "You are not allowed" });
      }
      const decorded = jwt.verify(token, config.secrete as string) as JwtPayload;;

      req.user = decorded ;
      if (roles.length && !roles.includes(decorded.role as string)) {
        return res.status(500).json({
          error :"authentication is not correct!!"
        })
      }
      Next();
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  };
};

export default loginAuth;
