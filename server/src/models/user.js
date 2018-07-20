import mongoose from 'mongoose';
// const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
// const Hero = require('../models/hero');
// const Avatar = require('../models/avatar');

// User Schema
const userSchema = new Schema(
  {
    // urlName: {
    //   type: String,
    //   lowercase: true,
    //   trim: true,
    //   required: true,
    // },
    username: {
      type: String,
      lowercase: true,
      trim: true,
      index: true,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      index: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    signup_time: {
      type: Date,
      default: Date.now,
    },
    timezone_offset: {
      type: Number,
      default: 0,
    },
    local_signup_time: {
      type: String,
      default: '',
    },
    language: {
      type: String,
      default: 'english',
    },
    status: {
      type: Boolean,
      default: true,
    },
    // avatar: [Avatar.schema],
    // heroes: [Hero.schema]
  } //,
  // {
  //   versionKey: '_documentVersion',
  // }
);

export default mongoose.model('User', userSchema);

// exports.createUser = (newUser, callback) => {
//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(newUser.password, salt, (err, hash) => {
//       // Store hash in your password DB.
//       newUser.password = hash;
//       newUser.save(callback);
//     });
//   });
// };

// exports.getUserByUsername = (username, callback) => {
//   let query = {
//     username: username
//   };
//   User.findOne(query, callback);
// };

// exports.getUserById = (id, callback) => {
//   User.findById(id, callback);
// };

// exports.comparePassword = (candidatePassword, hash, callback) => {
//   bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
//     if (err) throw err;
//     callback(null, isMatch);
//   });
// };
