const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 55,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 55,
      unique: true,
      trim: true,
    },
    gender: { type: String },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    selectedFile: {
      type: String,
      default: './uploads/profil/random-user.png',
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', function (next) {
  let user = this;
  if (user.isModified('password')) {
    return bcrypt.hash(user.password, 12, function (err, hash) {
      if (err) {
        console.log('BCRYPT HASH ERROR', err);
        return next(err);
      }
      user.password = hash;
      return next();
    });
  } else {
    return next();
  }
});

// WE COMPARE  PASSWORD THAT WE SEND FRONT
//TO THE PASSWORD THAT IS IN OUR DB

userSchema.methods.comparePassword = function (password, next) {
  bcrypt.compare(password, this.password, function (err, match) {
    if (err) {
      console.log('COMPARE PASSWORD ERROR', err);
      return next(err, false);
    }
    // if no err, we get null
    console.log('MATCH PASSWORD', match);
    return next(null, match);
  });
};

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
