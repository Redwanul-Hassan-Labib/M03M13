import { pool } from "../../config/db"

const getTodoService = async ()=>{
    const result = await pool.query(`SELECT * FROM todos`)
    return result
}

const postTodoService = async (Payload: Record<string, unknown>)=>{
  const {user_id, title} = Payload
    const result = await pool.query(
      `INSERT INTO todos(user_id, title) VALUES($1, $2) RETURNING *`,
      [user_id, title]
    );
    return result
}
const singleGetTodoService = async (id:string)=>{
    const result = await pool.query("SELECT * FROM todos WHERE id = $1", [id]);
    return result
}


 const putTodoService = async (title:string, completed:string, id:string)=>{
    const result = await pool.query(
      "UPDATE todos SET title=$1, completed=$2 WHERE id=$3 RETURNING *",
      [title, completed, id]
    );

    return result
 }
const deleteTodoService = async (id:string)=>{
    const result = await pool.query(
      "DELETE FROM todos WHERE id=$1 RETURNING *",
      [id]
    );
    return result
}
//TodoService
export const todoService = {
    getTodoService,
    postTodoService,
    singleGetTodoService,
    putTodoService,
     deleteTodoService,

}