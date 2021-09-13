const pool = require("../../databases/db");

function putUser(req, res) {
  return new Promise(async (resolve, reject) => {
    const { username, password } = req.body;
    const updateUser = await pool.query(
      "UPDATE users SET username=$1, password=$2 WHERE id=$3 RETURNING *",
      [username, password, req.params.id]
    );
    const userData = {
      command: updateUser.command,
      row: updateUser.rows[0],
    };
    return resolve(userData);
  });
}

module.exports = putUser;
