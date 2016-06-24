const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: String,
  desc: "",

}, { timestamps: true });

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;