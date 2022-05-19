const express = require("express");
const DocumentService = require("../service/document-service");
const route = express.Router();

route.post("/generate/idCard", GradeValidator.gradeValidate, (req, res) => {
  let bodyData = req.body;
  DocumentService.Create(bodyData)
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
