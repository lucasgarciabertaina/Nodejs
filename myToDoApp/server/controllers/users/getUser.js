const pool = require("../../databases/db");

function getUser(req, res) {
  return new Promise(async (resolve, reject) => {
    const user = await pool.query("SELECT * FROM users WHERE id=$1", [
      req.params.id,
    ]);
    userData = {
      command: user.command,
      row: user.rows[0],
    };
    return resolve(userData);
  });
}

module.exports = getUser;
