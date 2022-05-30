const express = require("express");
const ExaminationTypeService = require("../service/examination-type-service");
const route = express.Router();
const isAuthenticate = require("../service/token-service");

route.post("", isAuthenticate, (req, res) => {
  let bodyData = req.body;
  let userDetail = req.user;
  if (userDetail?.orgId) bodyData["orgId"] = userDetail.orgId;
  ExaminationTypeService.Create(bodyData)
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
  ExaminationTypeService.List(userDetail?.orgId)
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
  GradeService.Detail(id)
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
