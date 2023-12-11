const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    img: {
        type: String
    }
});

const News = mongoose.model('News', newsSchema);
module.exports = News;

/**
 
[
    {
        "title":"미국 공군연구소 & 육군연구소 국제 연구협력 세미나를 개최하여, 곽호상 총장님, 김동성 센터장님을 비롯한 여러 교수님들과 함께 추가적인 국제적 연구협력 방안을 논의하였습니다.",
        "date":"05-2022",
        "content":"미국 공군연구소 & 육군연구소 국제 연구협력 세미나를 개최하여, 곽호상 총장님, 김동성 센터장님을 비롯한 여러 교수님들과 함께 추가적인 국제적 연구협력 방안을 논의하였습니다."
    },
    {
        "title":"한국연구재단 지원 '극한환경 하의 딥러닝 분광기술 개발(₩68,000,000/yr - 3 years)' 연구를 시작하게 되었습니다.",
        "date":"06-2022",
        "content":"한국연구재단 지원 '극한환경 하의 딥러닝 분광기술 개발(₩68,000,000/yr - 3 years)' 연구를 시작하게 되었습니다.",
        "img":"research3.png"
    },
    {
        "title":"한국전산구조공학회의 학회지 6월호에 우수신진연구자로 소개되었습니다.",
        "date":"07-2022",
        "content":"abc",
        "img":"research3.png"
    },
    {
        "title":"경북 공공데이터 활용 경진대회에서 경북도지사상을 수상하였습니다. ('회전 기계 고장 진단을 위한 멀티모달 딥러닝 기술'- 강륜아, 김선규, 박태용, 백혜림)",
        "date":"08-2022",
        "content":"abc"
    },
    {
        "title":"한국연구재단 지원 '전기자동차 파워모듈용 고내구성 질화알루미늄계 방열 소재 및 이종소재 접합기술 개발 (₩100,000,000/yr - 4.5 years)' 연구를 시작하게 되었습니다.",
        "date":"08-2022",
        "content":"abc"
    },
    {
        "title":"'인공 신경망을 이용한 회전 기계의 고장 진단 시스템 및 그 방법 (10-2022-0112079)' 강륜아, 김선규, 박태용 백혜림 학생의 특허가 출원되었습니다.",
        "date":"09-2022",
        "content":"abc"
    },
    {
        "title":"한국소음진동공학회에서 우수신진연구자로 소개되었습니다.",
        "date":"11-2022",
        "content":"abc"
    },
    {
        "title":"현대자동차그룹 지원 '루프패드 장착 공법 변경에 따른 NVH  영향도 분석 (₩68,000,000 - 7 months)' 연구를 시작하게 되었습니다.",
        "date":"03-2023",
        "content":"경북 공공데이터 활용 경진대회에서 경북도지사상을 수상하였습니다. ('회전 기계 고장 진단을 위한 멀티모달 딥러닝 기술'- 강륜아, 김선규, 박태용, 백혜림)"
    },
    {
        "title":"춘계 한국소음진동공학회에 박세민, 박찬민, 강륜아, 김선규, 박태용, 안도현 학생이 참석하여, 진행 중인 연구를 발표하였습니다.",
        "date":"05-2023",
        "content":"경북 공공데이터 활용 경진대회에서 경북도지사상을 수상하였습니다. ('회전 기계 고장 진단을 위한 멀티모달 딥러닝 기술'- 강륜아, 김선규, 박태용, 백혜림)"
    },
    {
        "title":"한국연구재단/유럽외무부-프랑스연구교육부 지원 '골-임플란트 초음파 예측을 위한 물리정보 기반의 멀티모달 신경망(₩15,000,000/yr - 2 years)' 연구를 시작하게 되었습니다.",
        "date":"08-2023",
        "content":"경북 공공데이터 활용 경진대회에서 경북도지사상을 수상하였습니다. ('회전 기계 고장 진단을 위한 멀티모달 딥러닝 기술'- 강륜아, 김선규, 박태용, 백혜림)"
    },
    {
        "title":"'부분 공진을 이용한 구조물의 결함 검출 및 그 장치 (10-2023-0118541)' 박세민, 박찬민 학생의 특허가 출원되었습니다",
        "date":"09-2023",
        "content":"경북 공공데이터 활용 경진대회에서 경북도지사상을 수상하였습니다. ('회전 기계 고장 진단을 위한 멀티모달 딥러닝 기술'- 강륜아, 김선규, 박태용, 백혜림)"
    },
    {
        "title":"이슈메이커 시사매거진 9월호에 '기계공학 기반의 멀티모달 신경망' 이라는 주제로 우리 연구실이 소개되었습니다.",
        "date":"09-2023",
        "content":"경북 공공데이터 활용 경진대회에서 경북도지사상을 수상하였습니다. ('회전 기계 고장 진단을 위한 멀티모달 딥러닝 기술'- 강륜아, 김선규, 박태용, 백혜림)"
    },
    {
        "title":"'3차원 프린팅 격자구조물의 동적 특성을 평가하는 방법 및 시스템 (10-2023-0130204)' 박태용, 안도현 학생의 특허가 출원되었습니다.",
        "date":"10-2023",
        "content":"경북 공공데이터 활용 경진대회에서 경북도지사상을 수상하였습니다. ('회전 기계 고장 진단을 위한 멀티모달 딥러닝 기술'- 강륜아, 김선규, 박태용, 백혜림)"
    },
    {
        "title":"추계 한국소음진동공학회에서 박세민 (질화알루미늄–탄화규소 복합재료의 정적/동적 성능 평가), 박찬민 (LOCAL VIBRATION MODE 발생을 위한 BEAM형 결함평가 센서의 실험적 고찰) 학생이 진행 중인 연구를 발표하였습니다.",
        "date":"10-2023",
        "content":"경북 공공데이터 활용 경진대회에서 경북도지사상을 수상하였습니다. ('회전 기계 고장 진단을 위한 멀티모달 딥러닝 기술'- 강륜아, 김선규, 박태용, 백혜림)"
    },
    {
        "title":"추계 한국소음진동공학회에서 강륜아 (Explainable spectral network 기반의 극초음속/우주환경의 초분광 딥러닝 기술) 학생이 우수발표논문상을 수상하였습니다.",
        "date":"10-2023",
        "content":"경북 공공데이터 활용 경진대회에서 경북도지사상을 수상하였습니다. ('회전 기계 고장 진단을 위한 멀티모달 딥러닝 기술'- 강륜아, 김선규, 박태용, 백혜림)"
    },
    {
        "title":"현대자동차 남양연구소와 '동강성 성능 확보 위한 영향 인자 분석(₩10,000,000 - 9 months)' 연구용역을 시작하게 되었습니다.",
        "date":"10-2023",
        "content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddeeeeeeee"
    },
    {
        "title":"'진동 모델링을 이용한 복합재의 동적 물성 특성을 평가하는 방법 및 그 장치 (10-2023-0152944)' 박세민, 김선규 학생의 특허가 출원되었습니다",
        "date":"11-2023",
        "content":""    
    },
        {
        "title":"'Numerical investigation of heat transfer in aluminum nitride ceramics with engineered microstructures, Materials Letters' 박세민, 김선규 학생의 논문이 게재되었습니다.",
        "date":"11-2023",
        "content":""
    }
]

 */