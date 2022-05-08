const express = require("express");
const UserService = require("../service/user-service");
const route = express.Router();
const UserValidator = require("../validator/user-validator");

route.post("", UserValidator.userValidate, (req, res) => {
  let bodyData = req.body;
  UserService.registerUser(bodyData)
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
