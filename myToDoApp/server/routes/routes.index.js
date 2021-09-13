const { Router } = require("express");
const router = Router();

// PostgreSQL query
const pool = require("../databases/db");

// Response request
const { success, error } = require('../network/response')

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
  putUser,
  putAccount,
  putActivity,
  deleteUser,
  deleteAccount,
  deleteActivity
} = require("../controllers/countroller.index");
 
// User Routes

router.post("/user", async (req, res) => {
    await postUser(req, res)
      .then((userData) => {
        success(req, res, userData, 200)
      })
      .catch((userError) => {
        error(req, res, userError, 400, 'There isnt any data')
      })
});

router.get("/users", async (req, res) => {
  await getUsers(req, res)
  .then((userData) => {
    success(req, res, userData, 200)
  })
  .catch((userError) => {
    error(req, res, userError, 400, 'There isnt any data')
  })
});

router.get("/users/:id", (req, res) => {
  try {
    getUser(req, res);
  } catch (err) {
    console.error(err);
  }
});

router.put("/users/:id", (req, res) => {
  try {
    putUser(req, res);
  } catch (err) {
    console.error(err.message)
  }
});

router.delete("/users/:id", (req,res) => {
  try {
    deleteUser(req, res);
  } catch (err) {
    console.error(err.message);
  }
});

// Account Routes

router.post("/account", (req, res) => {
  try {
    postAccount(req, res);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/accounts", (req, res) => {
  try {
    getAccounts(req, res);
  } catch (err) {
    console.error(err);
  }
});

router.get("/accounts/:id", (req, res) => {
  try {
    getAccount(req, res);
  } catch (err) {
    console.error(err);
  }
});

router.put("/accounts/:id", (req,res) => {
  try {
    putAccount(req, res);
  } catch (err) {
    console.error(err.message)
  }
})

router.delete("/accounts/:id", (req,res) => {
  try {
    deleteAccount(req, res);
  } catch (err) {
    console.error(err.message);
  }
})

// Activities Routes

router.post("/activity", (req, res) => {
  try {
    postActivity(req, res);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/activities", (req, res) => {
  try {
    getActivities(req, res);
  } catch (err) {
    console.error(err);
  }
});

router.get("/activities/:id", (req, res) => {
  try {
    getActivity(req, res);
  } catch (err) {
    console.error(err);
  }
});

router.put("/activities/:id", (req,res) => {
  try {
    putActivity(req, res);
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/activities/:id", (req, res) => {
  try {
    deleteActivity(req, res);
  } catch (err) {
    console.error(err.message);
  }
})

module.exports = router;
