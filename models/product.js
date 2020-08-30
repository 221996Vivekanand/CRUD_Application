const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  fname: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Product', productSchema);
