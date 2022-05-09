const express = require("express");
const StudentValidator = require("../validator/student-validator");
const StudentService = require("../service/student-service");
const route = express.Router();
route.post("", StudentValidator.studentValidate, (req, res) => {
  let bodyData = req.body;
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
route.get("", (req, res) => {
  StudentService.List()
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
