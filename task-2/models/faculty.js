const mongoose = require('mongoose');

const facultySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  adress: {
    type: String,
    required: true
  },
  university: {
    ref: 'university',
    type: mongoose.Types.ObjectId
  }
  
}, { timestamps: true });

module.exports = mongoose.model('faculty', facultySchema);
