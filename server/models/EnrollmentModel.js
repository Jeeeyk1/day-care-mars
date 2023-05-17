const mongoose = require("mongoose");

const EnrollmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  lastName: {
    type: String,
    required: true,

    max: 50,
  },
  email: {
    type: String,
    required: true,
    min: 8,
  },

  isApproved: {
    type: Boolean,
    default: false,
  },
  relationship:{
    type:String,
    required:true
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  birthDate:{
    type:String,
    required:true
  },
  yearLevel:{
    type:String,
    required:false
  }
});

module.exports = mongoose.model("Enrollees", EnrollmentSchema);
