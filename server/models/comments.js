const mongoose = require("mongoose");
const schema = mongoose.Schema;

const commentsSchema = new schema({
        thoughtId: {type: schema.Types.ObjectId, ref: 'User', required: true},
        commenterId: {type: schema.Types.ObjectId, ref},
        comments: [{type: String, required:true}] ,
        createdAt: {type: Date, default: Date.now}
})