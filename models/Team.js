const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({

}, { timestamps: true });

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;