import { Request, Response } from "express";
import { pool } from "../../config/db";
import { userService } from "./user.service";

const postUserController = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    const result = await userService.postUserService(name, email);
    // console.log(result.rows[0]);
    res.status(201).json({
      success: false,
      message: "Data Instered Successfully",
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

const getUserController = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUserService();

    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: result.rows,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      datails: err,
    });
  }
}

const singleGetUserController = async (req: Request, res: Response) => {
  // console.log(req.params.id);
  try {
    const result = await userService.singleGetUserService(req.params.id!) ;

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "User fetched successfully",
        data: result.rows[0],
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}
const putUserController = async (req: Request, res: Response) => {
  // console.log(req.params.id);
  const { name, email } = req.body;
  try {
    const result = await userService.putUserService(name, email, req.params.id!)

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: result.rows[0],
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}
const deleteUserController = async (req: Request, res: Response) => {
  // console.log(req.params.id);
  try {
    const result = await userService.deleteUserService(req.params.id as string);

    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "User deleted successfully",
        data: result.rows,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}
// UserController

export const userController = {
    postUserController,
    getUserController,
    singleGetUserController,
    putUserController,
    deleteUserController
}