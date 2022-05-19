const express = require("express");
const AttendanceService = require("../service/attendance-service");
const route = express.Router();
const isAuthenticate = require("../service/token-service");

route.post("/mark-attendance", isAuthenticate, (req, res) => {
  let bodyData = req.body;
  AttendanceService.MarkAttendance(bodyData)
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
  AttendanceService.List()
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
