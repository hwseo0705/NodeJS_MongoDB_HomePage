const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    issued: {
        type: String,
        required: true
    }
});

const Patents = mongoose.model('Patents', patentSchema);
module.exports = Patents;

/*

[
    {
        "title":"Joining quality diagnosis device of panel element",
        "author":"Yunsang Kwak, Junhong Park",
        "issued":"US Patent 10254251B2 (2019) & Korea Patent 10-1865745 (2018)"
    },
    {
        "title":"Welding evaluation method based on dynamic element by measuring vibrations on welded joint structure",
        "author":"Yunsang Kwak, Sang Mok Park, Junhong Park",
        "issued":"Korea Patent, 10-1825054 (2018)"
    },
    {
        "title":"Pearl-inspired hyperspectral filter array",
        "author":"Young L. Kim, Yunsang Kwak, Jungwoo Leem",
        "issued":"US Patent, US20220146727A1 (2022)" 
    },
    {
        "title":"인공 신경망을 이용한 회전 기계의 고장 진단 시스템 및 그 방법 (System for diagnosing fault in rotating equipment based on artificial intelligence and method)",
        "author":"Yunsang Kwak, Ryuna Kang, Seon-Gyu Kim, Taeyong Park, Hyerim Baek",
        "issued":"Korea Patent, 10-2022-0112079 (2022)"
    },
    {
        "title":"부분 공진을 이용한 구조물의 결함 검출 및 그 장치 (Method for detecting defects in structures based on a vibration and apparatus thereof)",
        "author":"Yunsang Kwak, Semin Park, Chanmin Park",
        "issued":"Korea Patent, 10-2023-0118541 (2023)"
    },
    {
        "title":"3차원 프린팅 격자구조물의 동적 특성을 평가하는 방법 및 시스템 (Method for evaluating dynamic characteristics of 3D printed lattice structures and systems thereof)",
        "author":"Yunsang Kwak, Jaehwan Kim, Taeyong Park, Dohyun Ahn, Yewon Jang",
        "issued":"Korea Patent, 10-2023-0130204 (2023)" 
    }
]

*/