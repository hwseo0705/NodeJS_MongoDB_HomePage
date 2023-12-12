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
            res.render('photo', { result });
        })
        .catch((err) => {
            console.log(err);
        });
}

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
    photo_write_post,
    photo_delete
}