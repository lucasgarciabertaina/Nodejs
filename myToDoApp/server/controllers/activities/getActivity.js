const pool = require("../../databases/db");

function getActivity(req, res) {
  return new Promise(async (resolve, reject) => {
    const activity = await pool.query("SELECT * FROM activities WHERE id=$1", [
      req.params.id,
    ]);
    activityData = {
      command: activity.command,
      row: activity.rows[0],
    };
    resolve(activityData);
  });
}

module.exports = getActivity;