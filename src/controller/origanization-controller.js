const express = require("express");
const OriganizationService = require("../service/Origanization-service");
const route = express.Router();
const OriganizationValidator = require("../validator/origanization-validator");
const isAuthenticate = require("../service/token-service");
const CONSTANT = require("../utils/constant");
const rolesGuard = require("../service/role-guard.service");
route.post(
  "",
  OriganizationValidator.OriganizationValidate,
  isAuthenticate,
  rolesGuard(CONSTANT.ROLE.superAdmin),
  (req, res) => {
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
  }
);
route.get("", isAuthenticate, (req, res) => {
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
route.get("/:id", isAuthenticate, (req, res) => {
  let id = req.params.id;
  console.log(req.params);
  OriganizationService.Detail(id)
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
