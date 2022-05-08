const mongoose = require("../../database");
const schema = mongoose.Schema;

const CONSTANT = require("../utils/constant");
const OriganizationSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      country: { type: String, required: true },
      state: { type: String, required: true },
      city: { type: String, required: true },
    },
    registration_number: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  CONSTANT.COLLECTION.ORIGANIZATION,
  OriganizationSchema
);
