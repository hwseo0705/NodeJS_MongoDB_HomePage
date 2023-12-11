const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alumniSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: "blank-profile.png"
    }
});

const Alumni = mongoose.model('Alumni', alumniSchema);
module.exports = Alumni;

/*

*/