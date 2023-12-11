const Members = require('../models/members');
const Alumni = require('../models/alumni');

const members_add = (req, res) => {
    const members = new Members(
        {
            name: 'Semin Park (박세민)',
            status: 'grad',
            email: 'tpals8824@naver.com',
            date: '2022.07'
        }
    );

    members.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
};

const members_add_alumni = (req, res) => {
    const alumni = new Alumni(
        {
            name: 'Haewon Seo',
            info: '백수에욤',
            email: 'haewon@email.com',
        }
    );

    alumni.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
};

const members_index = (req, res) => {
    const request = req.query.status;

    if (request == 'all') {
        mem = Members.find().sort({ status: 1 });
    } else if (request == 'grad' || request == 'under') {
        mem = Members.find({ status: request }).sort({ status: 1 });
    }

    mem.then((result) => {
        res.render('member/member', { result, request });
    })
        .catch((err) => {
            console.error(error);
        });
};

const members_alumni_index = (req, res) => {
    const request = 'alumni';
    alum = Alumni.find().sort({ _id: -1 });
    alum.then((result) => {
        res.render('member/member', { result, request });
    })
        .catch((err) => {
            console.error(err);
        });
};

const members_write_get = (req, res) => {
    const request = req.query.status;
    res.render('member/member-write', { request });
};

const members_write_post = (req, res) => {
    const request = req.query.status;
    if (request == 'grad' || request == 'under') {
        const mem = new Members(req.body);
        mem.save()
            .then((result) => {
                res.redirect('/member?status=' + request);
            })
            .catch((err) => {
                console.log(err);
            });
    } else if (request == 'alumni') {
        const alumni = new Alumni(req.body)
        alumni.save()
            .then((result) => {
                res.redirect('/alumni');
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

const members_modify_get = (req, res) => {
    const request = req.query.status;
    if (request == 'grad' || request == 'under') {
        Members.findById(req.query.id)
            .then((result) => {
                res.render('member/member-modify', { result, request });
            })
            .catch(err => {
                console.log(err);
            });
    } else if (request == 'alumni') {
        Alumni.findById(req.query.id)
            .then((result) => {
                res.render('member/member-modify', { result, request });
            })
            .catch(err => {
                console.log(err);
            });
    }
};

const members_modify_put = (req, res) => {

    const request = req.query.status;

    if (request == 'grad' || request == 'under') {
        Members.findByIdAndUpdate(req.query.id, req.body)
            .then((result) => {
                res.redirect('/member?status=' + request);
            })
            .catch(err => {
                console.log(err);
            });
    } else if (request == 'alumni') {
        Alumni.findByIdAndUpdate(req.query.id, req.body)
            .then((result) => {
                res.redirect('/alumni');
            })
            .catch(err => {
                console.log(err);
            });
    }
};

const members_delete = (req, res) => {

    const request = req.query.status;

    if (request == 'grad' || request == 'under') {
        Members.deleteOne({ _id: req.query.id })
            .then((result) => {
                res.redirect('/member?status=' + request);
            })
            .catch((err) => {
                console.log(err);
            });;
    } else if (request == 'alumni') {
        Alumni.deleteOne({ _id: req.query.id })
            .then((result) => {
                res.redirect('/alumni');
            })
            .catch((err) => {
                console.log(err);
            });;
    }
};

module.exports = {
    members_add,
    members_add_alumni,
    members_index,
    members_alumni_index,
    members_write_get,
    members_write_post,
    members_modify_get,
    members_modify_put,
    members_delete
}