const mongoose = require('mongoose');
;
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  phone: {
    type: Number,
    validate: {
      validator(phone) {
        return /^[0-9]{10}$/.test(phone)
      }
    },
    message: 'Invalid Phone Number'
  }
});

module.exports = mongoose.model("users", UserSchema);
