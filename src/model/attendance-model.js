const mongoose = require("../../database");
const schema = mongoose.Schema;

const CONSTANT = require("../utils/constant");

const AttendanceSchema = new schema(
  {
    studentId: {
      type: schema.Types.ObjectId,
      ref: CONSTANT.COLLECTION.STUDENT,
      required: true,
    },
    attendanceDate: {
      type: Date, // yyyy-mm-dd
      required: true,
    },
    attendenceStatus: {
      type: String,
      enum: ["PRESENT", "ABSENT"],
    },
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
  CONSTANT.COLLECTION.ATTENDANCE,
  AttendanceSchema
);
