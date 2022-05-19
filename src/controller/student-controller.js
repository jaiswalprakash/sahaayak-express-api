const express = require("express");
const StudentValidator = require("../validator/student-validator");
const StudentService = require("../service/student-service");
const isAuthenticate = require("../service/token-service");
const route = express.Router();
route.post("", StudentValidator.studentValidate, isAuthenticate, (req, res) => {
  let bodyData = req.body;
  let userDetail = req.user;
  if (userDetail?.orgId) bodyData["orgId"] = userDetail.orgId;
  StudentService.Create(bodyData)
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
  StudentService.List(userDetail?.orgId)
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
