const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const membersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: "blank-profile.png"
    }
});

const Members = mongoose.model('Members', membersSchema);
module.exports = Members;

/*

[
    {
        "name":"Chanmin Park (박찬민)",
        "status":"grad",
        "email":"pcm0530@kumoh.ac.kr",
        "date":"2022.07"
    },
    {
        "name":"Semin Park (강륜아)",
        "status":"under",
        "email":"fbsdk3023@gmail.com",
        "date":"2021.09"
    },
    {
        "name":"Seon-Gyu Kim (김선규)",
        "status":"under",
        "email":"seongyu7849@naver.com",
        "date":"2021.09"
    },
    {
        "name":"Taeyong Park (박태용)",
        "status":"under",
        "email":"xodyd1955@gmail.com",
        "date":"2022.03"
    },
    {
        "name":"Dohyun Ahn (안도현)",
        "status":"under",
        "email":"adh0824@kumoh.ac.kr",
        "date":"2023.01"
    }
]
*/