const pool = require("../databases/db");

// User Controller

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

function getUsers(req, res) {
  return new Promise(async (resolve, reject) =>{
    const users = await pool.query("SELECT * FROM users");
    userData = {
      command: users.command,
      rows: users.rows
    }
    return resolve(userData)
  })
}

async function getUser(req, res) {
  const user = await pool.query("SELECT * FROM users WHERE id=$1", [
    req.params.id,
  ]);
  res.json(user.rows[0]);
}

async function putUser(req, res) {
  const { username, password } = req.body;
  const updateUser = await pool.query(
    "UPDATE users SET username=$1, password=$2 WHERE id=$3 RETURNING *",
    [username, password, req.params.id]
  );
  res.send(updateUser.rows[0]);
  console.log(`[userInfo] User ${username} has update.`);
}

async function deleteUser(req, res) {
  await pool.query("DELETE FROM users WHERE id=$1", [req.params.id]);
  res.send("[userInfo] User has delete. ");
  console.log("[userInfo] User has delete.");
}

// Account Controller

async function postAccount(req, res) {
  const { premium, direction, name, user_id } = req.body;
  const newAccount = await pool.query(
    "INSERT INTO accounts (premium, direction, name, user_id ) VALUES ($1, $2, $3, $4) RETURNING *",
    [premium, direction, name, user_id]
  );
  res.json(newAccount.rows[0]);
  console.log(`[accountInfo] Account ${name} has created.`);
}

async function getAccounts(req, res) {
  const accounts = await pool.query("SELECT * FROM accounts");
  res.json(accounts.rows);
}

async function getAccount(req, res) {
  const account = await pool.query("SELECT * FROM accounts WHERE id=$1", [
    req.params.id,
  ]);
  res.json(account.rows[0]);
}

async function putAccount(req, res) {
  const { premium, direction, name } = req.body;
  const updateAccount = await pool.query(
    "UPDATE accounts set premium=$1, direction=$2, name=$3 WHERE id=$4 RETURNING *",
    [premium, direction, name, req.params.id]
  );
  res.json(updateAccount.rows[0]);
  console.log(`[accountInfo] Account ${name} has update.`);
}

async function deleteAccount(req, res) {
  await pool.query("DELETE FROM accounts WHERE id=$1", [req.params.id]);
  res.send("[accountInfo] Account has delete. ");
  console.log("[accountInfo] Account has delete.");
}

// Activity Controller

async function postActivity(req, res) {
  const { activity, type, id_account, done, date } = req.body;
  const newActivity = await pool.query(
    "INSERT INTO activities (activity, type, id_account, done, date ) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [activity, type, id_account, done, date]
  );
  res.json(newActivity.rows[0]);
  console.log(`[activityInfo] Activity '${activity}' has created.`);
}

async function getActivities(req, res) {
  const activities = await pool.query("SELECT * FROM activities");
  res.json(activities.rows);
}

async function getActivity(req, res) {
  const activity = await pool.query("SELECT * FROM activities WHERE id=$1", [
    req.params.id,
  ]);
  res.json(activity.rows[0]);
}

async function putActivity(req, res) {
  const { activity, type, done, date } = req.body;
  const updateActivity = await pool.query(
    "UPDATE activities SET activity=$1, type=$2, done=$3, date=$4 WHERE id=$5 RETURNING *",
    [activity, type, done, date, req.params.id]
  );
  res.json(`[activityInfo] Activity '${activity}' has update.`);
}

async function deleteActivity(req, res) {
  await pool.query("DELETE FROM activities WHERE id=$1", [req.params.id]);
  console.log("[activityInfo] Activity has been removed.");
}

module.exports = {
  postUser,
  postAccount,
  postActivity,
  getUsers,
  getUser,
  getAccounts,
  getAccount,
  getActivities,
  getActivity,
  putUser,
  putAccount,
  putActivity,
  deleteUser,
  deleteAccount,
  deleteActivity,
};
