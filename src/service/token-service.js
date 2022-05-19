const CONSTANT = require("../utils/constant");
const jwt = require("jsonwebtoken");
const userDAO = require("../dao/user-dao");

//to authenticate User
async function isAuthenticate(req, res, next) {
  try {
    //const token = req.headers.authorization;
    const token = req.rawHeaders[1].split(" ")[1];
    if (token == null) {
      throw new Error("Token not found in request");
    }
    // Verify token with APP_SECRET
    const userDetail = await jwt.verify(token, CONSTANT.JWT.SECRET);

    if (userDetail == null) {
      throw new Error({
        status: CONSTANT.HTTP_STATUS_CODE.INVALID_CREDENTIAL,
        message: "Invalid Token",
      });
    }

    // check user data with database if user is valid or not...
    let user;
    user = await userDAO.getById(userDetail._id);
    if (user == null) {
      throw new Error("Invalid Token");
    }
    console.log("user=====>", user);
    req.user = user;
    next();
  } catch (error) {
    console.log("error=>", error);
    if (error.name && error.name.indexOf("TokenExpiredError") > -1) {
      res.status(CONSTANT.HTTP_STATUS_CODE.INVALID_CREDENTIAL).json(error);
    } else {
      res
        .status(error.status || CONSTANT.HTTP_STATUS_CODE.SERVER_ERROR)
        .json(error);
    }
  }
}

module.exports = isAuthenticate;
