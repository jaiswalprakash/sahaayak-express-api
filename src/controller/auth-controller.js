const express = require("express");
const route = express.Router();
const authService = require("../service/auth-service");
route.post("/signIn", (req, res) => {
  authService
    .signIn(req.body)
    .then((result) => {
      res.status(result.status).send({
        status: result.status,
        message: result.message,
        data: result.data,
      });
    })
    .catch((error) => {
      res
        .status(error.status)
        .send({ status: error.status, message: error.message });
    });
});

module.exports = route;
