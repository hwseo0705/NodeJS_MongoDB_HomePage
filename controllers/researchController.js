const Research = require('../models/research');

const research_add = (req, res) => {
    const research = new Research(
        {
            title: 'Title 1',
            description: 'A physics-informed multimodal neural network to understand the interaction between an ultrasonic wave and the bone-implant interface',
            intro_img: 'research3.png',
            research_img: 'research3.png'
        }
    );

    research.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
};

const research_index = (req, res) => {
    Research.find()
        .then((result) => {
            res.render('research/research', { result });
        })
};

const research_detail = (req, res) => {
    const id = req.query.id;
    Research.findById(id)
        .then(result => {
            res.render('research/research-detail', { result })
        })
        .catch(err => {
            console.log(err);
        });
};

const research_write_get = (req, res) => {
    res.render('research/research-write');
};

const research_write_post = (req, res) => {
    const research = new Research(req.body);

    research.save()
        .then((result) => {
            res.redirect('/research/detail?id=' + result._id);
        })
        .catch((err) => {
            console.log(err);
        });
}

const research_modify_get = (req, res) => {
    Research.findById(req.query.id)
        .then((result) => {
            res.render('research/research-modify', { result });
        })
        .catch(err => {
            console.log(err);
        });
};

const research_modify_put = (req, res) => {
    Research.findByIdAndUpdate(req.query.id, req.body)
        .then((result) => {
            res.redirect('/research/detail?id=' + req.query.id);
        })
        .catch((err) => {
            console.log(err);
        });
};

const research_delete = (req, res) => {
    Research.deleteOne({ _id: req.query.id })
        .then((result) => {
            res.redirect('/research');
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = {
    research_add,
    research_index,
    research_detail,
    research_write_get,
    research_write_post,
    research_modify_get,
    research_modify_put,
    research_delete
}