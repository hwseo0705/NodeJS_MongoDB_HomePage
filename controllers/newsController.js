const News = require('../models/news');

const news_add = (req, res) => {
    const news = new News(
        {
            title: '미국 공군연구소(AFRL) 지원 \'극초음속/우주 환경 적외선 센싱기술개발($10,000/yr - 2 years)\' 연구를 시작하게 되었습니다.',
            date: '04-2023',
            content: 'abc',
            img: 'airforce.png'
        },
    );

    news.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
};

module.exports = {
    news_add
}