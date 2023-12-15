var Publications = require('../models/publications')
var Patents = require('../models/patents');

const publication_add = (req, res) => {
    const publications = new Publications(
        {
            title: 'Complementary Approach of Transfer Matrix Method and Deep Learning for the Design Optimization of Asymmetric Grating',
            author: 'Jehwan Hwang+, Ryuna Kang, Yunsang Kwak, Zahyun Ku*',
            date: '2023'
        }
    );

    publications.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
};

const patent_add = (req, res) => {
    const patents = new Patents(
        {
            title: 'Hole detection method of vehicle and system performing the same',
            author: 'Yunsang Kwak, Sangkeun Ahn, Junhong Park',
            issued: 'US Patent 9863835B2 (2018) & China Patent 201613090606.X (2016) & Korea Patent 10-1776729 (2017)'
        }
    );

    patents.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
};

const publication_index = async (req, res) => {
    try {

        const request = 'publication';

        var perPage = 5;
        const perPaging = 5;

        const total = await Publications.countDocuments(); // 총 게시글 수 세기
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


        await Publications.find()
            .sort({ date: -1 })
            .skip(perPage * (page - 1)) // 아래 설명 보기
            .limit(perPage)
            .then((result) => {
                res.render('publication/publication', { result, request, page, startIndex, endIndex, totalPage });
            });

    } catch (error) {
        console.error(error);
    }
};

const patent_index = async (req, res) => {

    try {

        const request = 'patent';

        var perPage = 5;
        const perPaging = 5;

        const total = await Patents.countDocuments({});
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

        await Patents.find()
            .sort({ _id: -1 })
            .skip(perPage * (page - 1)) // 아래 설명 보기
            .limit(perPage)
            .then((result) => {
                res.render('publication/publication', { result, request, page, startIndex, endIndex, totalPage });
            });

    } catch (error) {
        console.error(error);
    }
};

const publication_write_get = (req, res) => {
    const request = req.query.status;
    res.render('publication/publication-write', { request });
};

const publication_write_post = (req, res) => {
    const request = req.query.status;
    if (request == 'publication') {
        const pub = new Publications(req.body)
        pub.save()
            .then((result) => {
                res.redirect('/publication');
            })
            .catch((err) => {
                console.log(err);
            });
    } else if (request == 'patent') {
        const pat = new Patents(req.body)
        pat.save()
            .then((result) => {
                res.redirect('/patent');
            })
            .catch((err) => {
                console.log(err);
            });
    }
};

const publication_modify_get = (req, res) => {
    const request = req.query.status
    if (request == 'publication') {
        Publications.findById(req.query.id)
            .then((result) => {
                res.render('publication/publication-modify', { result, request });
            })
            .catch(err => {
                console.log(err);
            });
    } else if (request == 'patent') {
        Patents.findById(req.query.id)
            .then((result) => {
                res.render('publication/publication-modify', { result, request });
            })
            .catch(err => {
                console.log(err);
            });
    }
};

const publication_modify_put = (req, res) => {

    const request = req.query.status

    if (request == 'publication') {
        Publications.findByIdAndUpdate(req.query.id, req.body)
            .then((result) => {
                res.redirect('/publication');
            })
            .catch(err => {
                console.log(err);
            });
    } else if (request == 'patent') {
        Patents.findByIdAndUpdate(req.query.id, req.body).then((result) => {
            res.redirect('/patent');
        })
            .catch(err => {
                console.log(err);
            });
    }
}

const publication_delete = (req, res) => {

    const request = req.query.status

    if (request == 'publication') {
        Publications.deleteOne({ _id: req.query.id })
            .then((result) => {
                res.redirect('/publication');
            })
            .catch((err) => {
                console.log(err);
            });
    } else if (request == 'patent') {
        Patents.deleteOne({ _id: req.query.id })
            .then((result) => {
                res.redirect('/patent');
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

module.exports = {
    publication_add,
    patent_add,
    publication_index,
    patent_index,
    publication_write_get,
    publication_write_post,
    publication_modify_get,
    publication_modify_put,
    publication_delete
}