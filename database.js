const mongoose = require("mongoose");
const CONSTANT = require("./src/utils/constant");

mongoose.connect(CONSTANT.MONGODB_URL, () => {
  console.log(`Connected to database '${CONSTANT.MONGODB_URL.split("/")[3]}'`);
});

module.exports = mongoose;
