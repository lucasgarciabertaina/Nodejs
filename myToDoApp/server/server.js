// Calling express server
const express = require("express");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router
app.use(require("./routes/routes.index"));

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
