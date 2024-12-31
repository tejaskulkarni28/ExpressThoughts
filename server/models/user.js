const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
        username: {type: String, required: true, unique: true},
        password: {type: String, required: true, unique: true},
        createdAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('users', userSchema);