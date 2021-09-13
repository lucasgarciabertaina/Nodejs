const success = (req, res, message, status, method) => {
  res
    .status(status || 200)
    .send({
      error: "",
      body: { message: message, method: method },
    });
};

const error = (req, res, message, status, details) => {
  console.error("[response error]" + details);
  res.status(status || 500).send({
    error: message,
    body: "",
  });
};

module.exports = {
  success,
  error,
};
