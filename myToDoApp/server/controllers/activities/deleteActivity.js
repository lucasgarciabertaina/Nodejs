const pool = require("../../databases/db");

async function deleteActivity(req, res) {
  await pool.query("DELETE FROM activities WHERE id=$1", [req.params.id]);
  console.log("[activityInfo] Activity has been removed.");
}

module.exports = deleteActivity;
