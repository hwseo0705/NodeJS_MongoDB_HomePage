const Photos = require('../models/photos');

const photo_add = (req, res) => {
    const photos = new Photos(
        {
            img: 'test2.png'
        }
    );

    photos.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
};

const photo_index = (req, res) => {
    Photos.find()
        .sort({ _id: -1 })
        .then((result) => {
            res.render('photo/photo', { result });
        })
        .catch((err) => {
            console.log(err);
        });
}

const photo_detail = (req, res) => {
    Photos.findById({ _id: req.query.id })
        .then((result) => {
            res.render('photo/photo-detail', { result });
        })
        .catch((err) => {
            console.log(err);
        });
}

const photo_write_get = (req, res) => {
    res.render('photo/photo-write');
};

const photo_write_post = (req, res) => {
    const photos = new Photos(req.body);
    photos.save()
        .then((result) => {
            res.redirect('/photo');
        })
        .catch((err) => {
            console.log(err);
        });
};

const photo_modify_get = (req, res) => {
    Photos.findById(req.query.id)
        .then((result) => {
            res.render('photo/photo-modify', { result });
        })
        .catch(err => {
            console.log(err);
        });
};

const photo_modify_put = (req, res) => {
    Photos.findByIdAndUpdate(req.query.id, req.body)
        .then((result) => {
            res.redirect('/photo/detail?id=' + req.query.id);
        })
        .catch((err) => {
            console.log(err);
        });
};

const photo_delete = (req, res) => {
    const id = req.query.id;
    Photos.deleteOne({ _id: id })
        .then((result) => {
            res.redirect('/photo');
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = {
    photo_add,
    photo_index,
    photo_detail,
    photo_write_get,
    photo_write_post,
    photo_modify_get,
    photo_modify_put,
    photo_delete
}