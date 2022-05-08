const express = require("express");
const OriganizationService = require("../service/Origanization-service");
const route = express.Router();
const OriganizationValidator = require("../validator/origanization-validator");
route.post("", OriganizationValidator.OriganizationValidate, (req, res) => {
  let bodyData = req.body;
  OriganizationService.Create(bodyData)
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
  OriganizationService.List()
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
