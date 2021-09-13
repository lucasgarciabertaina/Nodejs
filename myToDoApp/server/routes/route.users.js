const { Router } = require("express");
const router = Router();

// PostgreSQL query
const pool = require("../databases/db");

// Response request
const { success, error } = require("../network/response");

const {
  postUser,
  getUsers,
  getUser,
  putUser,
  deleteUser,
} = require("../controllers/users/users.index");

// User Routes

router.post("/user", async (req, res) => {
  await postUser(req, res)
    .then((userData) => {
      success(req, res, userData, 200, 'POST');
    })
    .catch((userError) => {
      error(req, res, userError, 400, "There isnt any data");
    });
});

router.get("/users", async (req, res) => {
  await getUsers(req, res)
    .then((userData) => {
      success(req, res, userData, 200, 'GET');
    })
    .catch((userError) => {
      error(req, res, userError, 400, "There isnt any data");
    });
});

router.get("/users/:id", async (req, res) => {
  await getUser(req, res)
    .then((userData) => {
      success(req, res, userData, 200, 'GET');
    })
    .catch((userError) => {
      error(res, req, userError, 400, "Cant get user data..");
    });
});

router.put("/users/:id", async (req, res) => {
  await putUser(req, res)
    .then((userData) => {
      success(req, res, userData, 200, 'PUT');
    })
    .catch((userError) => {
      error(req, res, userError, 400, "Put user dont found");
    });
});

router.delete("/users/:id", (req, res) => {
  try {
    deleteUser(req, res);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;