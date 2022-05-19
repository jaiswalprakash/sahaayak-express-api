const Joi = require("joi");
const CONSTANT = require("../utils/constant");
const UserValidateSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  role: Joi.valid(...CONSTANT.ROLE).required(),
  // orgId: Joi.string().when("role", {
  //   is: "SUPER-ADMIN",
  //   then: Joi.optional(),
  //   otherwise: Joi.required(),
  // }),
});

module.exports = UserValidateSchema;
