const mongoose = require("mongoose");
const schema = mongoose.Schema;
const CONSTANT = require("../utils/constant");

const ParentSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Date,
      required: true,
    },
    relation: {
      type: String,
      required: true,
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
module.exports = mongoose.model(CONSTANT.COLLECTION.PARENT, ParentSchema);
