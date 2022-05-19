const mongoose = require("../../database");
const schema = mongoose.Schema;

const CONSTANT = require("../utils/constant");
const FeeSchema = new schema(
  {
    grade: {
      type: schema.Types.ObjectId,
      ref: CONSTANT.COLLECTION.GRADE,
      required: true,
    },
    feeStructure: {
      totalAmount: { type: Number, required: true },
      onceYear: {
        yearAmount: { type: Number, required: false },
        breakDown: [
          {
            label: { type: String, required: false },
            amount: { type: Number, required: false },
          },
        ],
      },
      monthly: {
        monthAmount: { type: Number, required: false },
        breakDown: [
          {
            label: { type: String, required: false },
            amount: { type: Number, required: false },
          },
        ],
      },
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

module.exports = mongoose.model(CONSTANT.COLLECTION.FEE, FeeSchema);
