const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const researchExperienceSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    institution: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const ResearchExperience = mongoose.model('ResearchExperience', researchExperienceSchema);
module.exports = ResearchExperience;

/*

[
    {
        "title":"Perception quantification of vehicle BSR (Buzz, Rattle, Squeak) noise",
        "institution":"Hyundai Motors",
        "date":"2013.05 – 2014.04" 
    },
    {
        "title":"Development of Photomixing-based high-speed high-resolution THz imaging/spectroscopy technique for Diagnosis of Hidden Damage in Structural Composites and Semiconductor Packaging materials",
        "institution":"National Research Foundation",
        "date":"2013.07 – 2018.08" 
    },
    {
        "title":"Study on interaction of excitation source and complex floating structure for reduction of floor impact noise",
        "institution":"National Research Foundation",
        "date":"2014.05 – 2015.04" 
    },
    {
        "title":"Neural network based-leak detection in road vehicles using sounds from interaction of air jet",
        "institution":"Hyundai Motors",
        "date":"2014.10 – 2015.09" 
    },
    {
        "title":"Rattle source identification in a road vehicle and evaluation of panel BSR noise",
        "institution":"Hyundai Motors",
        "date":"2014.06 – 2016.07" 
    },
    {
        "title":"Sound Radiation Mechanism and Acoustic Modeling of Rainfall Noise by Impact of Droplet on Vehicle Panel",
        "institution":"Hyundai Motors",
        "date":"2016.05 – 2017.12" 
    },
    {
        "title":"Development of the in-line welds quality estimation system and network-based quality control technology in arc and spot welds of ultra-high strength steels for automotive parts assembly",
        "institution":"Korea Evaluation Institute of Industrial Technology",
        "date":"2017.01 – 2018.09" 
    },
    {
        "title":"Ultrasonic assessment of osseointegration phenomena at the bone-implant interface using convolutional neural network",
        "institution":"European Research Council, France",
        "date":"2018.09 – 2019.08" 
    },
    {
        "title":"Configurable computational spectroscopy using randomness-assisted deep learning",
        "institution":"Air Force Research Laboratory, USA",
        "date":"2019.09 – 2020.12" 
    },
    {
        "title":"Intravital mHealth spectroscopy of microvascular blood analysis for anemia and sickle cell disease",
        "institution":"National Institutes of Health, USA",
        "date":"2020.09 –2021.08" 
    }
]

*/