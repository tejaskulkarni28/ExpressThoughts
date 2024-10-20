const mongoose = require('mongoose');
const schema = mongoose.Schema;


const thoughtSchema = new schema({
    thought:{type: String}
})

module.exports = mongoose.model('thoughts', thoughtSchema) // Mongoose automatically pluralizes the name you provide. So, in this case:
