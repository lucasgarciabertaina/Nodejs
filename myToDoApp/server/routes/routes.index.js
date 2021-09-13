const { Router } = require("express");
const router = Router();

const pool = require("../databases/db");

const {
  postUser,
  postAccount,
  postActivity,
  getUsers,
  getUser,
  getAccounts,
  getAccount,
  getActivities,
  getActivity,
} = require("../controllers/countroller.index");

// Post User

router.post("/user", async (req, res) => {
  try {
    postUser(req, res);
  } catch (err) {
    console.error(err.message);
  }
});

// Post Account

router.post("/account", async (req, res) => {
  try {
    postAccount(req, res);
  } catch (err) {
    console.error(err.message);
  }
});

// Post Do

router.post("/todo", async (req, res) => {
  try {
    postActivity(req, res);
  } catch (err) {
    console.error(err.message);
  }
});

// Get all users

router.get("/users", async (req, res) => {
  try {
    getUsers(req, res);
  } catch (err) {
    console.error(err);
  }
});

// Get a user

router.get("/users/:id", async (req, res) => {
  try {
    getUser(req, res);
  } catch (err) {
    console.error(err);
  }
});

// Get all accounts

router.get("/accounts", async (req, res) => {
  try {
    getAccounts(req, res);
  } catch (err) {
    console.error(err);
  }
});

// Get a account

router.get("/accounts/:id", async (req, res) => {
  try {
    getAccount(req, res);
  } catch (err) {
    console.error(err);
  }
});

// Get all activities

router.get("/activities", async (req, res) => {
  try {
    getActivities(req, res);
  } catch (err) {
    console.error(err);
  }
});

// Get a activity

router.get("/activities/:id", async (req, res) => {
  try {
    getActivity(req, res);
  } catch (err) {
    console.error(err);
  }
});

// Put User


module.exports = router;
