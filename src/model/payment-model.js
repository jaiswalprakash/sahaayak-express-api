const mongoose = require("../../database");
const schema = mongoose.Schema;

const CONSTANT = require("../utils/constant");
const PaymentSchema = new schema(
  {
    studentId: {
      type: schema.Types.ObjectId,
      ref: CONSTANT.COLLECTION.STUDENT,
      required: true,
    },
    paymentDate: {
      type: Date, // yyyy-mm-dd
      required: true,
    },
    amountPaid: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
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

module.exports = mongoose.model(CONSTANT.COLLECTION.PAYMENT, PaymentSchema);
