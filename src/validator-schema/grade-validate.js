const Joi = require("joi");
const GradeValidateSchema = Joi.object({
  name: Joi.number().required(),
  subjects: Joi.array()
    .items({
      name: Joi.string().required(),
      mark: Joi.object({
        theory: Joi.object({ totalMark: Joi.number(), passMark: Joi.number() }),
        practical: Joi.object({
          totalMark: Joi.number(),
          passMark: Joi.number(),
        }),
      }),
    })
    .required(),
  // orgId: Joi.string(),
});

module.exports = GradeValidateSchema;
