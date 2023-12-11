const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collaboratorSchema = new Schema({
    institution: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: 'blank-profile.png'
    }
});

const Collaborators = mongoose.model('Collaborators', collaboratorSchema);
module.exports = Collaborators;

/*

[
    {
        "institution":"French National Research Center",
        "name":"Guillaume Haïat, Vu-Hieu Nguyen"
    },
    {
        "institution":"Purdue University",
        "name":"Young L. Kim",
        "img":"purdue.png"
    },
    {
        "institution":"US Air Froce Research Laboratory",
        "name":"Zahyun Ku",
        "img":"airforce.png"
    },
    {
        "institution":"Hongik Uniersity",
        "name":"Bongjoong Kim"
    },
    {
        "institution":"Kongkuk University",
        "name":"Sang Yeob Kim"
    }
]

*/