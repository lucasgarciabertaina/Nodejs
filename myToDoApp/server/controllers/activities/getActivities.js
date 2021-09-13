const pool = require("../../databases/db");

function getActivities(req, res) {
  return new Promise(async (resolve, reject) => {
    const activities = await pool.query("SELECT * FROM activities");
    activitiesData = {
      command: activities.command,
      rows: activities.rows,
    };
  });
}

module.exports = getActivities;