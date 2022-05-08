const UserValidateSchema = require("../validator-schema/user-validate");
const CONSTANT = require("../utils/constant");
const UserValidate = {
  userValidate: (req, res, next) => {
    let { value, error } = UserValidateSchema.validate(req.body);
    if (error)
      return res
        .status(CONSTANT.HTTP_STATUS_CODE.BAD_REQUEST)
        .send({
          status: CONSTANT.HTTP_STATUS_CODE.BAD_REQUEST,
          message: error.details[0].message,
        });
    next();
  },
};

module.exports = UserValidate;
