const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: {
    type: String,
  },
  foot: {
    type: String,
    enum: ['left', 'right']
  },
  number: {
    type: Number
  },
  rating: {
    type: Number
  },
});

module.exports = mongoose.model('Player', PlayerSchema);