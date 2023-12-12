const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
    img: {
        type: String,
        required: true
    }
});

const Photos = mongoose.model('Photos', photoSchema);
module.exports = Photos;

/*
[
    {
        "img":"airforce.png"
    },
    {
        "img":"AVIP.png"
    },
    {
        "img":"blank-profile.png"
    },
    {
        "img":"Hanyang.png"
    },
    {
        "img":"intro.jpg"
    },
    {
        "img":"logo.png"
    },
    {
        "img":"main.png"
    },
    {
        "img":"purdue.png"
    },
    {
        "img":"research3.png"
    },
    {
        "img":"research4.png"
    },
    {
        "img":"research5.png"
    },
    {
        "img":"research6.png"
    }
]
*/