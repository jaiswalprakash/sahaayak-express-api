const express = require("express");
const UserService = require("../service/user-service");
const route = express.Router();
const UserValidator = require("../validator/user-validator");
const isAuthenticate = require("../service/token-service");
route.post("", isAuthenticate, UserValidator.userValidate, (req, res) => {
  let bodyData = req.body;
  let userDetail = req.user;
  if (userDetail?.orgId) bodyData["orgId"] = userDetail.orgId;
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

route.get("", isAuthenticate, (req, res) => {
  let userDetail = req.user;
  UserService.List(userDetail?.orgId)
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
