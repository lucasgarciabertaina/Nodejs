const pool = require("../../databases/db");

function getAccounts(req, res) {
  return new Promise(async (resolve, reject) => {
    const accounts = await pool.query("SELECT * FROM accounts");
    const accountData = {
      command: accounts.command,
      rows: accounts.rows,
    };
    resolve(accountData);
  });
}

module.exports = getAccounts;