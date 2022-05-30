const express = require("express");
const route = express.Router();
const isAuthenticate = require("../service/token-service");
const ResultService = require("../service/result-service");

route.post("/generate", isAuthenticate, (req, res) => {
  let bodyData = req.body;
  let userDetail = req.user;
  if (userDetail?.orgId) {
    bodyData.forEach((e) => {
      e["orgId"] = userDetail.orgId;
    });
  }
  ResultService.generate(bodyData)
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
  ResultService.List(userDetail?.orgId)
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
