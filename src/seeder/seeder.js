const CONSTANT = require("./src/utils/constant");
const GradeService = require("./src/service/grade-service");
GradeService.SeedGrades()
  .then((result) => {
    if (result) {
      console.log("Grades Seeded Successfully");
    }
  })
  .catch((error) => {
    console.log(CONSTANT.MESSAGE.COMMON.COMMON_ERROR, error);
  });
