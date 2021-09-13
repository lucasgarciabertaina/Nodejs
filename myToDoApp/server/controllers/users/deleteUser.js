const pool = require("../../databases/db");

async function deleteUser(req, res) {
  await pool.query("DELETE FROM users WHERE id=$1", [req.params.id]);
  res.send("[userInfo] User has delete. ");
  console.log("[userInfo] User has delete.");
}

module.exports = deleteUser;