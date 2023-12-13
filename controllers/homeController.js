const News = require('../models/news');

const home_index = (req, res) => {
    News.find().sort({ date : -1 }).limit(10)
        .then((result) => {
            res.render('home/home', { news: result });
        })
};

module.exports = {
    home_index
}