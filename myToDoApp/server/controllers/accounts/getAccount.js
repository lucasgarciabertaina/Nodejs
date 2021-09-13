const pool = require("../../databases/db");

function getAccount(req, res) {
  return new Promise(async (resolve, reject) => {
    const account = await pool.query("SELECT * FROM accounts WHERE id=$1", [
      req.params.id,
    ]);
    accountData = {
      command: account.command,
      row: account.rows[0],
    };
    resolve(accountData);
  });
}

module.exports = getAccount;