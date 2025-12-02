import { Request, Response } from "express";
import { todoService } from "./todo.service";


const getTodoController = async (req: Request, res: Response) => {
  try {
    const result = await todoService.getTodoService();

    res.status(200).json({
      success: true,
      message: "todos retrieved successfully",
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


const postTodoController = async (req: Request, res: Response) => {
  const { user_id, title } = req.body;

  try {
    const result = await todoService.postTodoService(user_id, title
    );
    res.status(201).json({
      success: true,
      message: "Todo created",
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}
const singleGetTodoController = async (req:Request, res:Response) => {
  try {
    const result = await todoService.singleGetTodoService(req.params.id!);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch todo" });
  }
}

const putTodoController = async (req:Request, res:Response) => {
  const { title, completed } = req.body;

  try {
    const result = await todoService.putTodoService(title, completed, req.params.id!);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to update todo" });
  }
}
const deleteTodoController =  async (req:Request, res:Response) => {
  try {
    const result = await todoService.deleteTodoService(req.params.id!);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.json({ success: true, message: "Todo deleted", data: null });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to delete todo" });
  }
}
//TodoController


export const todocontroller = {
    getTodoController,
    postTodoController,
    singleGetTodoController,
    putTodoController,
    deleteTodoController,


}