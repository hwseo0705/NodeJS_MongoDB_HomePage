var Publications = require('../models/publications')
var Patents = require('../models/patents');

const publication_add = (req, res) => {
    const publications = new Publications(
        {
            title: 'Complementary Approach of Transfer Matrix Method and Deep Learning for the Design Optimization of Asymmetric Grating',
            author: 'Jehwan Hwang+, Ryuna Kang, Yunsang Kwak, Zahyun Ku*',
            date: '2023',
            status: 'prep'
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
        var ind = req.query.index;
        if (ind == undefined) ind = 1;

        const request = req.query.status;
        var page = Number(req.query.page || 1); // 값이 없다면 기본값으로 1 사용
        var perPage = 2;
        const total = await Publications.countDocuments({ status: request }); // 총 게시글 수 세기
        const totalPage = Math.ceil(total / perPage);

        await Publications.find({ status: request })
            .sort({ date: -1 })
            .skip(perPage * (page - 1)) // 아래 설명 보기
            .limit(perPage)
            .then((result) => {
                res.render('publication/publication', { result, request, totalPage, ind });
            });

    } catch (error) {
        console.error(error);
    }
};

const patent_index = async (req, res) => {

    var ind = req.query.index;
    if (ind == undefined) ind = 1;

    var page = Number(req.query.page || 1);
    var perPage = 2;
    const total = await Patents.countDocuments({});
    const totalPage = Math.ceil(total / perPage);
    const request = 'patent';

    await Patents.find()
        .sort({ _id: -1 })
        .skip(perPage * (page - 1)) // 아래 설명 보기
        .limit(perPage)
        .then((result) => {
            res.render('publication/publication', { result, request, totalPage, ind });
        })
        .catch(err => {
            console.log(err);
        });
};

const publication_write_get = (req, res) => {
    const request = req.query.status;
    res.render('publication/publication-write', { request });
};

const publication_write_post = (req, res) => {
    const request = req.query.status;
    if (request == 'prep' || request == 'published') {
        const pub = new Publications(req.body)
        pub.save()
            .then((result) => {
                res.redirect('/publication?status=' + request);
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
    if (request == 'prep' || request == 'published') {
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

    if (request == 'prep' || request == 'published') {
        Publications.findByIdAndUpdate(req.query.id, req.body)
            .then((result) => {
                res.redirect('/publication?status=' + request);
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

    if (request == 'prep' || request == 'published') {
        Publications.deleteOne({ _id: req.query.id })
            .then((result) => {
                res.redirect('/publication?status=' + request);
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