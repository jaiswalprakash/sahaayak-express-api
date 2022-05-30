const { number } = require("joi");
const mongoose = require("../../database");
const schema = mongoose.Schema;

const CONSTANT = require("../utils/constant");

const ResultSchema = new schema(
  {
    student: {
      type: schema.Types.ObjectId,
      ref: CONSTANT.COLLECTION.STUDENT,
      required: true,
    },
    marksObtain: [
      {
        name: { type: String, required: true },
        mark: {
          theory: {
            totalMark: { type: Number, required: true },
            passMark: { type: Number, required: true },
            obtained: { type: Number, required: true },
            status: { type: String, enum: ["P", "F"] },
          },
          practical: {
            totalMark: { type: Number, required: false, default: 0 },
            passMark: { type: Number, required: false, default: 0 },
            obtained: { type: Number, required: true, default: 0 },
            status: { type: String, enum: ["P", "F"] },
          },
        },
      },
    ],

    grade: {
      type: schema.Types.ObjectId,
      ref: CONSTANT.COLLECTION.GRADE,
      required: true,
    },
    examinationType: {
      type: schema.Types.ObjectId,
      ref: CONSTANT.COLLECTION.EXAMINATION_TYPE,
      required: true,
    },
    attendence: {
      type: String,
      required: true,
    },
    orgId: {
      type: schema.Types.ObjectId,
      ref: CONSTANT.COLLECTION.ORIGANIZATION,
      required: true,
    },
    // classRank: {
    //   type: Number,
    //   required: true,
    // },
    // totalObtainedMark: {
    //   type: Number,
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);
ResultSchema.methods.toJSON = function () {
  const obj = this.toObject();
  var totalObtainedMark = 0;
  var totalSubjectMark = 0;
  for (let subject of obj.marksObtain) {
    subject.mark.theory.status =
      subject.mark.theory.obtained >= subject.mark.theory.passMark ? "P" : "F";
    subject.mark.practical.status =
      subject.mark.practical.obtained >= subject.mark.practical.passMark
        ? "P"
        : "F";
    totalObtainedMark +=
      subject.mark.theory.obtained + subject.mark.practical.obtained;
    totalSubjectMark +=
      subject.mark.theory.totalMark + subject.mark.practical.totalMark;
  }
  obj.totalObtainedMark = totalObtainedMark;
  obj.totalSubjectMark = totalSubjectMark;
  obj.obtainedPercentage = (totalObtainedMark / totalSubjectMark) * 100;

  return obj;
};
module.exports = mongoose.model(CONSTANT.COLLECTION.RESULT, ResultSchema);
