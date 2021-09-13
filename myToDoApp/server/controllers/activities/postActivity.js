const pool = require("../../databases/db");

function postActivity(req, res) {
  return new Promise(async (resolve, reject) => {
    const { activity, type, id_account, done, date } = req.body;
    if (!activity || !type || !id_account || !done || !date) {
      console.error("[activityController] There isnt any type of data");
      return reject("[activityInfo] The data are incorrect");
    }
    const newActivity = await pool.query(
      "INSERT INTO activities (activity, type, id_account, done, date ) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [activity, type, id_account, done, date]
    );
    activityData = {
      command: newActivity.command,
      row: newActivity.rows[0],
    };
    console.log(`[activityInfo] Activity '${activity}' has created.`);
    resolve(activityData);
  });
}

module.exports = postActivity;