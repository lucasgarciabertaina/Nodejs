const express = require('express');
const app = express();
const cors = require('cors');

//database
const pool = require('./db')

//middleware
app.use(cors());
app.use(express.json());

//Routes//

//create a todo

app.post("/todos", async (req,res) => {
    try {
        const { description } = req.body
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]);
        res.json(newTodo[0])        
    } catch (err) {
        console.error(error.message)
    };
});

//get all todo

app.get("/todos", async(req, res) =>{
    try {
        const allTodos = await pool.query("SELECT * FROM todo")
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message)
    };
});

//get a todo

app.get("/todos/:id", async (req,res) =>{
    try {
        const allTodos = await pool.query(
            "SELECT * FROM todo WHERE todo_id=($1)",
            [req.params.id]
            )
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message)
    }
});

//update todo

app.put("/todos/:id", async(req,res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2",
            [description, id]
            );
        res.json("The data was updated!")
    } catch (err) {
        console.error(err.message)
    }
});

//delete todo

app.delete("/todos/:id", async(req,res) =>{
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE todo_id = $1",
            [id]
        );
        res.json("[deleteMessage] ID "+id+" Was deleted succsessfully!")
    } catch (err) {
        console.error(err.message)
    }
});

app.listen(4000, () => {
    console.log('server has started on port 4000')
});