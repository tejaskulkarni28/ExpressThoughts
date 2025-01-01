const mongoose = require('mongoose');
const schema = mongoose.Schema;


const thoughtSchema = new schema({
    userId: {type: schema.Types.ObjectId, ref: 'users', required: true},
    thought: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    likes: {type: Number, default: 0},
    comments: [
        {
            commenterId: { type: schema.Types.ObjectId, ref: 'users'},
            comment: { type: String, default: "" },
            commentedAt: { type: Date, default: Date.now }
        }
    ]

    // tags: [{type: String}]
})

module.exports = mongoose.model('thoughts', thoughtSchema) // Mongoose automatically pluralizes the name you provide. So, in this case:
