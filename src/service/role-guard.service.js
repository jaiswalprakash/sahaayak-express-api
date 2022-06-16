const rolesGuard = (role) => {
  //console.log("role guard", role);
  return async (req, res, next) => {
    try {
      let userDetail = req.user;
      if (userDetail.role === role) next();
      else {
        throw {
          status: 403,
          message: "Permission Denied!",
        };
      }
    } catch (error) {
      console.log("error in roleGuard=>", error);
      res
        .status(error.status)
        .send({ status: error.status, message: error.message });
    }
  };
};

module.exports = rolesGuard;
