const EducationAndExperiences = require('../models/educationAndExperiences');
const Awards = require('../models/awards');

const pi_add_eduExp = (req, res) => {
    const eduExp = new EducationAndExperiences(
        {
            title: 'Bachelor’s degree',
            info: 'Mechanical Engineering, Hanyang University, Seoul, Korea',
            date: '2008.03 – 2013.08'
        }
    );

    eduExp.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
};

const pi_add_awards = (req, res) => {
    const awards = new Awards(
        {
            awards: '2013 Excellence award for Graduation thesis (우수졸업논문) at Hanyang University'
        }
    );

    awards.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
};

const pi_index = async (req, res) => {
    try {
        const query1 = EducationAndExperiences.find().sort({ date: -1 }).exec();
        const query2 = Awards.find().sort({ _id: -1 }).exec();

        const [eduExp, awards] = await Promise.all([query1, query2]);

        res.render('pi/pi', { eduExp, awards });
    } catch (error) {
        console.error(error);
    }
}

const pi_eduExp_write_get = (req, res) => {
    res.render('pi/eduExp-write');
};

const pi_eduExp_write_post = (req, res) => {
    const eduExp = new EducationAndExperiences(req.body);
    eduExp.save()
        .then((result) => {
            res.redirect('/pi');
        })
        .catch((err) => {
            console.log(err);
        });
};

const pi_eduExp_modify_get = (req, res) => {
    EducationAndExperiences.findById(req.query.id)
        .then((result) => {
            res.render('pi/eduExp-modify', { result });
        })
        .catch(err => {
            console.log(err);
        });
};

const pi_eduExp_modify_post = (req, res) => {
    EducationAndExperiences.findByIdAndUpdate(req.query.id, req.body)
        .then((result) => {
            res.redirect('/pi');
        })
        .catch(err => {
            console.log(err);
        });

};

const pi_eduExp_delete = (req, res) => {
    EducationAndExperiences.deleteOne({ _id: req.query.id })
        .then((result) => {
            res.redirect('/pi');
        })
        .catch((err) => {
            console.log(err);
        });
};

const pi_awards_write_get = (req, res) => {
    res.render('pi/awards-write');
};

const pi_awards_write_post = (req, res) => {
    const awards = new Awards(req.body);
    awards.save()
        .then((result) => {
            res.redirect('/pi');
        })
        .catch((err) => {
            console.log(err);
        });
};

const pi_awards_modify_get = (req, res) => {
    Awards.findById(req.query.id)
        .then((result) => {
            res.render('pi/awards-modify', { result });
        })
        .catch(err => {
            console.log(err);
        });
};

const pi_awards_modify_post = (req, res) => {
    Awards.findByIdAndUpdate(req.query.id, req.body)
        .then((result) => {
            res.redirect('/pi');
        })
        .catch(err => {
            console.log(err);
        });
};

const pi_awards_delete = (req, res) => {
    Awards.deleteOne({ _id: req.query.id })
        .then((result) => {
            res.redirect('/pi');
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = {
    pi_add_eduExp,
    pi_add_awards,
    pi_index,
    pi_eduExp_write_get,
    pi_eduExp_write_post,
    pi_eduExp_modify_get,
    pi_eduExp_modify_post,
    pi_eduExp_delete,
    pi_awards_write_get,
    pi_awards_write_post,
    pi_awards_modify_get,
    pi_awards_modify_post,
    pi_awards_delete
}