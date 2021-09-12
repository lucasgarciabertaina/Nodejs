const mongo = require('mongodb');


const Schema = mongo.Schema;

const mySchema = new Schema({
    user: String,
    message: {
        type:  String,
        required: true,
    },
    date: Date,
});

const model = mongo.model('Message',mySchema);
module.exports = model;

