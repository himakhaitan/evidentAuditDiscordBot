const {Schema, model} = require("mongoose");

const PollSchema = new Schema({
    creator: {
        
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    votes: [{
        user: {
            type: String,
            required : true,
        },
        emoji: {
            type: String,
            required: true,
        }
    }]
});

const Pole = model('Pole', PollSchema);

module.exports = Pole;