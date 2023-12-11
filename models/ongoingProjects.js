const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ongoingProjectSchema = new Schema({
    kTitle: {
        type: String,
        required: true
    },
    eTitle: {
        type: String,
        required: true
    },
    position: {
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
    },
    budget: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: 'blank-profile.png'
    }
});

const OngoingProjects = mongoose.model('OngoingProjects', ongoingProjectSchema);
module.exports = OngoingProjects;

/*

[
    {
        "kTitle":"극초음속/우주 환경의 딥러닝 적외선 센싱기술 개발",
        "eTitle":"Deep infrared sensing in Hypersonic/Space environmental conditions",
        "position":"Principal investigator (연구책임자)",
        "institution":"Air Force Research Laboratory (미공군 연구소), USA",
        "date":"2022.07.28 - 2024.07.27",
        "budget":"$10,000/yr - 2 years"
    },

    
    {
        "kTitle":"루프패드 장착 공법 변경에 따른 NVH  영향도 분석",
        "eTitle":"Effects of roof-pad installation on NVH (Noise, Vibration, Harshness) testing of road vehicles",
        "position":"Co-investigator (공동책임자)",
        "institution":"Hyundai Motor Group (현대자동차 그룹)",
        "date":"2023.04.01 - 2023.10.31",
        "budget":"₩68,000,000 - 7 months"
    },
    {
        "kTitle":"전기자동차 파워모듈용 고내구성 질화알루미늄계 방열 소재 및 이종소재 접합기술 개발",
        "eTitle":"Development of high reliable aluminum nitride-based substrate and Cu-brazing technology of EV power module application",
        "position":"Co-investigator (공동책임자)",
        "institution":"National Research Foundation of Korea (한국연구재단)",
        "date":"2022.07.01 - 2026.12.31",
        "budget":"₩100,000,000/yr - 4.5 years"
    },
    {
        "kTitle":"극한 환경조건(극초음속/우주)의 고성능 적외선 분광기술을 위한 정보복원 딥러닝 기술",
        "eTitle":"Information recovery-deep learning for high performance infrared spectroscopy in extreme environmental condition (Hypersonic/Space)",
        "position":"Principal investigator (연구책임자)",
        "institution":"National Research Foundation of Korea (한국연구재단)",
        "date":"2022.06.01 - 2025.05.31",
        "budget":"₩68,000,000/yr - 3 years"
    },
    {
        "kTitle":"극초음속/우주 환경의 딥러닝 적외선 센싱기술 개발",
        "eTitle":"Deep infrared sensing in Hypersonic/Space environmental conditions",
        "position":"Principal investigator (연구책임자)",
        "institution":"Air Force Research Laboratory (미공군 연구소), USA",
        "date":"2022.07.28 - 2024.07.27",
        "budget":"$10,000/yr - 2 years"
    },
    {
        "kTitle":"골-임플란트 계면의 초음파 교호작용 예측을 위한 물리정보 기반의 멀티모달 신경망",
        "eTitle":"A physics-informed multimodal neural network to understand the interaction between an ultrasonic wave and the bone-implant interface",
        "position":"Principal investigator (연구책임자) with Guillaume Haiat (CNRS - UMR 8208)",
        "institution":"National Research Foundation of Korea (한국연구재단) / Europe and Foreign Affairs (유럽외무부), France",
        "date":"2023.10.01 - 2025.09.30",
        "budget":"₩35,000,000/yr - 2 years"
    }
]

*/