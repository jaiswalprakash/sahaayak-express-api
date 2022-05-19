const PaymentModel = require("../model/payment-model");
const PaymentDAO = {
  Create: (payload) => {
    return new PaymentModel({
      ...payload,
    }).save();
  },
  List: (orgId) => {
    return orgId ? PaymentModel.find({ orgId }) : PaymentModel.find();
  },
  Detail: (id) => {
    return PaymentModel.find({ _id: id });
  },
};
module.exports = PaymentDAO;
