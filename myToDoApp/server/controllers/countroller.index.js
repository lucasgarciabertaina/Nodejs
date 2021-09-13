const pool = require("../databases/db");

// User Controller

async function postUser(req, res) {
  const { username, password } = req.body;
  const newUser = await pool.query(
    "INSERT INTO users(username, password) VALUES ($1, $2) RETURNING *",
    [username, password]
  );
  res.json(newUser.rows[0]);
  console.log(`[userInfo] User ${username} has created.`);
}

async function getUsers(req, res) {
  const users = await pool.query("SELECT * FROM users");
  res.json(users.rows);
}

async function getUser(req, res) {
  const user = await pool.query("SELECT * FROM users WHERE id=$1", [
    req.params.id,
  ]);
  res.json(user.rows[0]);
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

async function getActivities(req, res){
    const activities = await pool.query(
        "SELECT * FROM activities"
    );
    res.json(activities.rows)
}

async function getActivity(req, res){
    const activity = await pool.query(
        "SELECT * FROM activities WHERE id=$1",
        [req.params.id]
    );
    res.json(activity.rows[0])
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
  getActivity
};
