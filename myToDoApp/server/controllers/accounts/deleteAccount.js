const pool = require("../../databases/db");

async function deleteAccount(req, res) {
  await pool.query("DELETE FROM accounts WHERE id=$1", [req.params.id]);
  res.send("[accountInfo] Account has delete. ");
  console.log("[accountInfo] Account has delete.");
}

module.exports = deleteAccount;
