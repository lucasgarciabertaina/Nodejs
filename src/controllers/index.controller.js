const { response } = require('express');
const { Pool } = require('pg');


const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '20421846619Lg',
    database: 'firstapi',
    port: '5432'
});


const getUsers = async (req,res) => {
    const response = await pool.query('SELECT * FROM users');
    res.status(200).json(response.rows);
};

const getUserById = async (req,res) => {
    const response = await pool.query('SELECT * FROM users WHERE id = $1',[req.params.id])
    res.json(response.rows);
}

const createUser = async (req,res) => {
    const { name, email} = req.body;

    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    console.log(response);
    res.json({
        message: 'User Added Succesfully',
        body: {
            user: {name,email}
        }
    })
};

const updateUser = async (req,res) => {
    const {name, email} = req.body
    await pool.query('UPDATE users SET id=$1,name=$2,email=$3 WHERE id=$1',[req.params.id,name,email])
    console.log(response)
    res.json(`User ${req.params.id} update succesfully`);
}

const deleteUser = async (req,res) =>{
    await pool.query('DELETE FROM users WHERE id=$1',[req.params.id])
    console.log(response)
    res.json(`User ${req.params.id} delete succesfully`);
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}