const pool = require("../../databases/db");

function getUsers(req, res) {
  return new Promise(async (resolve, reject) => {
    const users = await pool.query("SELECT * FROM users");
    userData = {
      command: users.command,
      rows: users.rows,
    };
    return resolve(userData);
  });
}

module.exports = getUsers;
