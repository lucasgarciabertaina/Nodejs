// Calling express server
const express = require("express");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(require("./routes/route.users"));
app.use(require("./routes/route.accounts"));
app.use(require("./routes/route.activities"));

app.listen(4500, () => {
  console.log("Server listening on port 4500...");
});
