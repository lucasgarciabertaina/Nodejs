const pool = require("../../databases/db");

function putActivity(req, res) {
  return new Promise(async (req, res) => {
    const { activity, type, done, date } = req.body;
    const updateActivity = await pool.query(
      "UPDATE activities SET activity=$1, type=$2, done=$3, date=$4 WHERE id=$5 RETURNING *",
      [activity, type, done, date, req.params.id]
    );
    const activityData = {
      command: updateActivity.command,
      row: updateActivity.rows[0]
    }
  });
}

module.exports = putActivity;