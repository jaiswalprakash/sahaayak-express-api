const express = require("express");
const app = express();
const CONSTANT = require("./src/utils/constant");
const UserService = require("./src/service/user-service");
app.use(require("body-parser").json());
require("./database");
// Origin CORS
// const allowlist = ['*']
const cors = require("cors");
app.use(cors());

//Routes to Controller

app.use("/auth", require("./src/controller/auth-controller"));
app.use("/users", require("./src/controller/user-controller"));
app.use("/grades", require("./src/controller/grade-controller"));
app.use("/origanizatins", require("./src/controller/origanization-controller"));
app.use("/students", require("./src/controller/student-controller"));
app.use("/attendances", require("./src/controller/attendance-controller"));
app.use("/fees", require("./src/controller/fee-controller"));

// routes ends

//create admin
UserService.isUserExist({ email: "prakashjaiswal625@gmail.com" })
  .then((result) => {
    if (!result.data) {
      UserService.registerUser({
        name: "super-admin",
        password: "superAdmin123",
        email: "prakashjaiswal625@gmail.com",
        role: "SUPER-ADMIN",
      })
        .then((reslt) => {
          console.log("SUPER-ADMIN Created Successfully");
        })
        .catch((error) => {
          console.log(CONSTANT.MESSAGE.COMMON.COMMON_ERROR);
        });
    } else {
      console.log(CONSTANT.MESSAGE.USER.USER_ALREADY_REGISTERED);
    }
  })
  .catch((error) => {
    console.log(CONSTANT.MESSAGE.COMMON.COMMON_ERROR, error);
  });

// End of Admin Create
app.listen(CONSTANT.PORT, () => {
  console.log(`Started Server at ${CONSTANT.PORT}`);
});
