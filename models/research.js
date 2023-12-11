const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const researchSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    intro_img: {
        type: String,
        required: true
    },
    research_img: {
        type:String,
        required: true
    }
});

const Research = mongoose.model('Research', researchSchema);
module.exports = Research;

/*

[
    {
        "title":"Title 2",
        "description":"A physics-informed multimodal neural network to understand the interaction between an ultrasonic wave and the bone-implant interface",
        "intro_img":"research4.png",
        "research_img":"research4.png"
    },
    {
        "title":"Title 3",
        "description":"A physics-informed multimodal neural network to understand the interaction between an ultrasonic wave and the bone-implant interface",
        "intro_img":"research5.png",
        "research_img":"research5.png"
    },
    {
        "title":"Title 4",
        "description":"A physics-informed multimodal neural network to understand the interaction between an ultrasonic wave and the bone-implant interface",
        "intro_img":"research6.png",
        "research_img":"research6.png"
    }
]

*/