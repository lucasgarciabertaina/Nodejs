const pool = require("../../databases/db");

function postUser(req, res) {
  return new Promise(async (resolve, reject) => {
    const { username, password } = req.body;
    if (!username || !password) {
      console.error("[userController] There isnt username or password");
      return reject("[userInfo] The data are incorrect");
    } else {
      const newUser = await pool.query(
        "INSERT INTO users(username, password) VALUES ($1, $2) RETURNING *",
        [username, password]
      );
      console.log(`[userController] User ${username} has created.`);
      userData = {
        command: newUser.command,
        rows: newUser.rows,
      };
      return resolve(userData);
    }
  });
}

module.exports = postUser;