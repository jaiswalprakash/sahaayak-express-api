const mongoose = require("mongoose");
const schema = mongoose.Schema;
const CONSTANT = require("../utils/constant");
// function arrayLimit(val) {
//   return val.length <= 1;
// }
const StudentSchema = new schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: false,
    },
    surName: {
      type: String,
      required: false,
    },

    DOB: {
      type: Date,
      required: true,
    },
    gender: { type: String, enum: CONSTANT.GENDER, required: true },
    uuid: {
      type: String,
      required: true,
    },
    parents: [
      {
        type: schema.Types.ObjectId,
        ref: CONSTANT.COLLECTION.PARENT,
        required: true,
        // validate: [arrayLimit, "parents exceeds the limit of 2"],
      },
    ],
    address: {
      country: { type: String, required: true },
      state: { type: String, required: true },
      city: { type: String, required: true },
      pinCode: { type: Number, required: false },
    },
    orgId: {
      type: schema.Types.ObjectId,
      ref: CONSTANT.COLLECTION.ORIGANIZATION,
      required: true,
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
    // collation: { locale: 'en', strength: 2 }
  }
);
// if we want to modify any field before saving
StudentSchema.methods.toJSON = function () {
  const obj = this.toObject();
  console.log("obj", obj);
  obj.StudentImgURL = obj.StudentImgURL
    ? CONSTANT.AWS.s3BaseURL +
      CONSTANT.AWS.s3BucketName +
      "/" +
      obj.StudentImgURL
    : obj.StudentImgURL;
  return obj;
};
module.exports = mongoose.model(CONSTANT.COLLECTION.STUDENT, StudentSchema);

/* 
db.fruit.insertMany( [
   { type: "apple" },
   { type: "Apple" },
   { type: "APPLE" }
] )
  db.fruit.find( { type: "apple" } ) 
    // does not use index, finds one result

  db.fruit.find( { type: "apple" } ).collation( { locale: 'en', strength: 2 } )
    // uses the index, finds three results

  db.fruit.find( { type: "apple" } ).collation( { locale: 'en', strength: 1 } )
    // does not use the index, finds three results
    
*/
