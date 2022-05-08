const mongoose = require("../../database");
const schema = mongoose.Schema;

const CONSTANT = require("../utils/constant");
const GradeSchema = new schema(
  {
    name: {
      type: Number,
      required: true,
    },
    subjects: [
      {
        name: { type: String, required: true },
        mark: {
          theory: {
            totalMark: { type: Number, required: true },
            passMark: { type: Number, required: true },
          },
          practical: {
            totalMark: { type: Number, required: false, default: 0 },
            passMark: { type: Number, required: false, default: 0 },
          },
        },
      },
    ],
    orgId: {
      type: schema.Types.ObjectId,
      ref: CONSTANT.COLLECTION.ORIGANIZATION,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(CONSTANT.COLLECTION.GRADE, GradeSchema);
