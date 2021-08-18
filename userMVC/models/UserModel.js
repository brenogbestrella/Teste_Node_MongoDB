const mongoose = require('../database');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    userName: {
        type: String,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;