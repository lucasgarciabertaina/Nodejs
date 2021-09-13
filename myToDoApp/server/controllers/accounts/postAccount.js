const pool = require("../../databases/db");

function postAccount(req, res) {
  return new Promise(async (resolve, reject) => {
    const { premium, direction, name, user_id } = req.body;
    if (!premium || !direction || !name || !user_id) {
      console.error("[accountController] There isnt any type of data");
      return reject("[accountInfo] The data are incorrect");
    }
    const newAccount = await pool.query(
      "INSERT INTO accounts (premium, direction, name, user_id ) VALUES ($1, $2, $3, $4) RETURNING *",
      [premium, direction, name, user_id]
    );
    const accountData = {
      command: newAccount.command,
      row: newAccount.rows[0],
    };
    console.log(
      `[accountController] Account ${name} has created succsessfully!`
    );
    return resolve(accountData);
  });
}

module.exports = postAccount;