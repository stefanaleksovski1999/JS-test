const mongoose = require('mongoose');

const universitySchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    adress: {
      type: String,
      required: true
    },
    faculties: [{
      type: mongoose.Types.ObjectId,
      ref: 'faculties'
    }]

   
  }, { timestamps: true });
  
  module.exports = mongoose.model('university', universitySchema);