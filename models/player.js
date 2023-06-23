const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
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
  position:{
    type: String,
    enum: [
      "Goalkeeper",
      "Center-Back",
      "Right-Back",
      "Left-Back",
      "Defensive-Midfielder",
      "Central-Midfielder",
      "Attacking-Midfielder",
      "Right-Winger",
      "Left-Winger",
      "Left-Striker",
      "Right-Striker",
      "Striker",
      "Sub"
    ]
  }
});

module.exports = mongoose.model('Player', PlayerSchema);