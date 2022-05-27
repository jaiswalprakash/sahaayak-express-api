const mongoose = require("../../database");
const schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const CONSTANT = require("../utils/constant");
const saltRounds = 10;
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
    userName: {
      type: String,
      unique: true,
    },
    orgId: {
      type: schema.Types.ObjectId,
      ref: CONSTANT.COLLECTION.ORIGANIZATION,
      required: false,
    },
    role: {
      type: String,
      enum: CONSTANT.ROLE,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
UserSchema.pre("save", function (next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.setPassword = function (password) {
  const user = this;
  user.password = password;
  const errors = user.validateSync();
  if (errors) {
    throw new MyHttpException(500);
  }
  return bcrypt.hashSync(user.password, user.salt);
};
UserSchema.methods.checkPassword = function (attempt) {
  const user = this;
  return bcrypt.compareSync(attempt, user.password);
};
module.exports = mongoose.model(CONSTANT.COLLECTION.USER, UserSchema);
