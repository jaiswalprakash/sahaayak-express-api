const mongoose = require("mongoose");
const schema = mongoose.Schema;
const CONSTANT = require("../utils/constant");

const StudentSchema = new schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    uuid: {
      type: String,
      required: true,
    },
    parents: [
      {
        name: { type: String, required: true },
        email: { type: String, required: false },
        phoneNumber: { type: Number, required: false },
        relation: { type: String, required: true },
      },
    ],
    address: {
      country: { type: String, required: true },
      state: { type: String, required: true },
      city: { type: String, required: true },
    },
    orgId: {
      type: schema.Types.ObjectId,
      ref: CONSTANT.COLLECTION.ORIGANIZATION,
      required: false,
    },
    grade: {
      type: schema.Types.ObjectId,
      ref: CONSTANT.COLLECTION.GRADE,
      required: true,
    },
    StudentImgURL: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model(CONSTANT.COLLECTION.STUDENT, StudentSchema);
