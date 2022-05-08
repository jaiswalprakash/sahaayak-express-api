const mongoose = require("../../database");
const schema = mongoose.Schema;

const CONSTANT = require("../utils/constant");

const UserSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    orgId: {
      type: schema.Types.ObjectId,
      ref: CONSTANT.COLLECTION.ORIGANIZATION,
      required: false,
    },
    role: {
      type: String,
      enum: CONSTANT.ROLE,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(CONSTANT.COLLECTION.USER, UserSchema);
