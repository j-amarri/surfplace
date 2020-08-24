const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  total: {
    amount: Number,
    currency: {
      type: String,
      enum: ['EUR', 'USD']
    }
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Board',
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  }
  // charge: String
});

module.exports = mongoose.model('Order', schema);
