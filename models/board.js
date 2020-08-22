const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200
  },
  description: {
    type: String,
    minlength: 3,
    maxlength: 1000,
    required: true
  },
  model: {
    type: String,
    enum: ['Fish', 'Shortboard', 'Hybrid', 'Gun', 'Funboard', 'Longboard'],
    required: true
  },
  size: {
    type: String,
    required: true
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced', 'All levels'],
    default: 'All levels'
  },
  location: {
    coordinates: [
      {
        type: Number,
        min: -180,
        max: 180
      }
    ],
    type: {
      type: String,
      default: 'Point'
    }
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  picture: {
    type: String,
    default: '/board-placeholder.jpg'
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  price: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Board', schema);
