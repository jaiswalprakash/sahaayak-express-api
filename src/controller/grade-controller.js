const express = require("express");
const GradeService = require("../service/grade-service");
const route = express.Router();
const GradeValidator = require("../validator/grade-validator");
route.post("", GradeValidator.gradeValidate, (req, res) => {
  let bodyData = req.body;
  GradeService.Create(bodyData)
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
  GradeService.List()
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
