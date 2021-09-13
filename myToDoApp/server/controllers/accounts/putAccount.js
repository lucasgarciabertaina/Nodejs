const pool = require("../../databases/db");

function putAccount(req, res) {
  return new Promise(async (resolve, reject) => {
    const { premium, direction, name } = req.body;
    const updateAccount = await pool.query(
      "UPDATE accounts set premium=$1, direction=$2, name=$3 WHERE id=$4 RETURNING *",
      [premium, direction, name, req.params.id]
    );
    const accountData = {
      command: updateAccount.command,
      row: updateAccount.rows[0],
    };
    console.log(`[accountInfo] Account ${name} has update.`);
    resolve(accountData);
  });
}

module.exports = putAccount;