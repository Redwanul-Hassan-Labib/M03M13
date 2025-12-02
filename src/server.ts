import express, { NextFunction, request, Request, response, Response } from "express";
// import { Pool } from "pg";
import dotenv from "dotenv";
import path from "path";
import initBD, { pool } from "./config/db";
import config from "./config";
const app = express();
const port =config.port ;

// ! Params
app.use(express.json());


//? use db function call
initBD();



const logger = (req: Request, res:Response, next:NextFunction)=>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path} \n`);
    next();
}

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello Redwanul Hassan Labib!");
});

app.post("/users", async (req: Request, res: Response) => {
  const { name, email, age, address, phone } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO users(name, email, age, address, phone) VALUES($1, $2, $3, $4, $5) RETURNING *`,
      [name, email, age, address, phone]
    );

    // console.log(result)

    // res.send({message:"data sending"})

    res.status(201).json({
      Succuss: false,
      message: "data insert",
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      Succuss: false,
      message: err.message,
    });
  }

  //   res.status(201).json({
  //     Succuss : true,
  //     Message : "api is working"
  //   })
});

//! all page get
app.get("/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM users`);
    res.status(200).json({
      Succuss: false,
      message: "User face successfully",
      data: result.rows,
    });
  } catch (err: any) {
    res.status(500).json({
      Succuss: false,
      message: err.message,
      detailes: err,
    });
  }
});

//! single page get
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [
      req.params.id,
    ]);

    if (result.rows.length === 0) {
      res.status(500).json({
        Succuss: false,
        message: "data is not nai",
      });
    } else {
      res.status(200).json({
        Succuss: false,
        message: "User face successfully",
        data: result.rows,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      Succuss: false,
      message: err.message,
      detailes: err,
    });
  }
});

//! data put

app.put("/users/:id", async (req: Request, res: Response) => {
  const { name, email, age, address, phone } = req.body;
  try {
    const result = await pool.query(
      `UPDATE users SET name=$1, email=$2, age=$3, address=$4, phone=$5 WHERE id=$6   RETURNING *`,
      [name, email, age, address, phone, req.params.id]
    );

    if (result.rows.length === 0) {
      res.status(500).json({
        Succuss: false,
        message: "data is not nai",
      });
    } else {
      res.status(200).json({
        Succuss: false,
        message: "User updated successfully",
        data: result.rows[0],
      });
    }
  } catch (err: any) {
    res.status(500).json({
      Succuss: false,
      message: err.message,
      detailes: err,
    });
  }
});

//! data delete

app.delete("/users/:id", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`DELETE FROM users WHERE id = $1`, [
      req.params.id,
    ]);

    if (result.rowCount === 0) {
      res.status(500).json({
        Succuss: false,
        message: "data is not nai",
      });
    } else {
      res.status(200).json({
        Succuss: false,
        message: "User delete successfully",
        data: result.rows,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      Succuss: false,
      message: err.message,
      detailes: err,
    });
  }
});

//! keu jodi vul route dey

app.use((req, res) => {
  res.status(404).json({
    Succuss: false,
    message: "route vul",
    path: req.path
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
