const mongoose = require('mongoose');

const CampingSchema = mongoose.Schema(
  {
    image: {type: String, required: false},
    name: {type: String, required: true},
    description: {type: String, required: true},
    location: {
      state: {type: String, required: true},
      city: {type: String, required: true},
      address: {type: String, required: true}
    },
    contact: {type: Number, required: true}
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Camping', CampingSchema);