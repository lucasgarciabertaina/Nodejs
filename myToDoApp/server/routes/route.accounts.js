const { Router } = require("express");
const router = Router();

// PostgreSQL query
const pool = require("../databases/db");

// Response request
const { success, error } = require("../network/response");

const {
    postAccount,
    getAccounts,
    getAccount,
    putAccount,
    deleteAccount
} = require('../controllers/accounts/accounts.index')

// Account Routes

router.post("/account", async (req, res) => {
  await postAccount(req, res)
    .then((accountData) => {
      success(req, res, accountData, 200, 'POST');
    })
    .catch((accountError) => {
      error(req, res, accountError, 400, "There isnt any data");
    });
});

router.get("/accounts", async (req, res) => {
  await getAccounts(req, res)
    .then((accountsData) => {
      success(req, res, accountsData, 200, 'GET');
    })
    .catch((accountsError) => {
      error(req, res, accountsError, 400, "The account data not found");
    });
});

router.get("/accounts/:id", async (req, res) => {
  await getAccount(req, res)
    .then((accountData) => {
      success(req, res, accountData, 200, 'GET');
    })
    .catch((accountError) => {
      error(req, res, accountError, 400, "Problem to get a account!");
    });
});

router.put("/accounts/:id", async (req, res) => {
  await putAccount(req, res)
    .then((accountData) => {
      success(req, res, accountData, 200, 'PUT');
    })
    .catch((accountError) => {
      error(req, res, accountError, 400, "Problem to put a account!");
    });
});

router.delete("/accounts/:id", (req, res) => {
  try {
    deleteAccount(req, res);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;