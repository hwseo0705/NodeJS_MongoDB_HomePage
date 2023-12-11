const News = require('../models/news');

const news_add = (req, res) => {
    const news = new News(
        {
            title: '미국 공군연구소(AFRL) 지원 \'극초음속/우주 환경 적외선 센싱기술개발($10,000/yr - 2 years)\' 연구를 시작하게 되었습니다.',
            date: '2022-04',
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

const news_index = async (req, res) => {

    var ind = req.query.index;
    if (ind == undefined) ind = 1;

    const page = Number(req.query.page || 1); // 값이 없다면 기본값으로 1 사용
    const perPage = 5;

    const total = await News.countDocuments({}); // 총 게시글 수 세기
    const totalPage = Math.ceil(total / perPage);

    await News.find()
        .sort({ date: -1 })
        .skip(perPage * (page - 1))
        .limit(perPage)
        .then((result) => {
            res.render('news/news', { news: result, pages: totalPage, index: ind });
        })
        .catch(err => {
            console.log(err);
        });
};

const news_detail = (req, res) => {
    const id = req.query.id;
    News.findById(id)
        .then(result => {
            res.render('news/news-detail', { news: result })
        })
        .catch(err => {
            console.log(err);
        });
};

const news_write_get = (req, res) => {
    res.render('news/news-write');
};

const news_write_post = (req, res) => {
    const news = new News(req.body);

    news.save()
        .then((result) => {
            res.redirect('/news/detail?id=' + result._id);
        })
        .catch((err) => {
            console.log(err);
        });
};

const news_modify_get = (req, res) => {
    News.findById(req.query.id)
        .then((result) => {
            res.render('news/news-modify', { news: result });
        })
        .catch(err => {
            console.log(err);
        });
};

const news_modify_post = (req, res) => {
    News.findByIdAndUpdate(req.query.id, req.body)
        .then((result) => {
            res.redirect('/news/detail?id=' + req.query.id);
        })
        .catch((err) => {
            console.log(err);
        });
};

const news_delete = (req, res) => {
    News.deleteOne({ _id: req.query.id })
        .then((result) => {
            res.redirect('/news');
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = {
    news_add,
    news_index,
    news_write_get,
    news_write_post,
    news_modify_get,
    news_modify_post,
    news_delete,
    news_detail
}