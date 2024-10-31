const mongoose = require('mongoose');
const schema = mongoose.Schema;


const thoughtSchema = new schema({
    userId: {type: schema.Types.ObjectId, ref: 'User', required: true},
    thought: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    likes: [{type: schema.Types.ObjectId, ref: 'User'}],
    tags: [{type: String}]
})

module.exports = mongoose.model('thoughts', thoughtSchema) // Mongoose automatically pluralizes the name you provide. So, in this case:
