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

    var perPage = 2;
    const perPaging = 5;

    const total = await News.countDocuments(); // 총 게시글 수 세기
    const totalPage = Math.ceil(total / perPage);

    var qp = req.query.page || 1;
    if (qp < 1) qp = 1;
    else if (qp > totalPage) qp = totalPage;


    const page = Number(qp); // 값이 없다면 기본값으로 1 사용

    where = Math.floor(page / perPaging);
    if (page % perPaging == 0) where -= 1;


    startIndex = where * perPaging + 1;
    if (startIndex < 1) startIndex = 1;
    endIndex = startIndex + perPaging - 1;
    if (endIndex > totalPage) endIndex = totalPage;

    console.log(startIndex, endIndex);

    await News.find()
        .sort({ date: -1 })
        .skip(perPage * (page - 1)) // 아래 설명 보기
        .limit(perPage)
        .then((result) => {
            res.render('news/news', { news: result, page, startIndex, endIndex, totalPage });
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

const news_modify_put = (req, res) => {
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
    news_modify_put,
    news_delete,
    news_detail
}