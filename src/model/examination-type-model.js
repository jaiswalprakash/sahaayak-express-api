const mongoose = require("../../database");
const schema = mongoose.Schema;

const CONSTANT = require("../utils/constant");
const ExaminationTypeSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    grade: [
      {
        type: schema.Types.ObjectId,
        ref: CONSTANT.COLLECTION.GRADE,
        required: true,
      },
    ],
    orgId: {
      type: schema.Types.ObjectId,
      ref: CONSTANT.COLLECTION.ORIGANIZATION,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  CONSTANT.COLLECTION.EXAMINATION_TYPE,
  ExaminationTypeSchema
);
