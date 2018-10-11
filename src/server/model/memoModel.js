const mongoose = require('mongoose');
const { Schema } = mongoose;

const memoSchema = new Schema({
  memoTitle: String,
  memoText: String,
})

module.exports = mongoose.model('Memo', memoSchema);