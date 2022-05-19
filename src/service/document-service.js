const StudentDAO = require("../dao/student-dao");
const CONSTANT = require("../utils/constant");
const fs = require("fs");
const pdf = require("html-pdf");
const html = fs.readFileSync("../html-pdf-templete/idcard1.html", "utf8");
const DocumentService = {
  CreateIDCard: (payload) => {
    return new Promise((resolve, reject) => {
      StudentDAO.List()
        .then((result) => {
          let infoData = result;
          pdf.create(html, options).toFile("./idcard.pdf", function (err, res) {
            if (err) return console.log(err);
            console.log(res); // { filename: '/app/businesscard.pdf' }
          });
          //   resolve({
          //     data: result,
          //   });
        })
        .catch((error) => {
          reject({
            status: CONSTANT.HTTP_STATUS_CODE.SERVER_ERROR,
            message: error,
          });
        });
    });
  },
};
module.exports = DocumentService;
