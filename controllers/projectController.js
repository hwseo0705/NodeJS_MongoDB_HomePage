const ResearchExperience = require('../models/researchExperience');
const Collaborators = require('../models/collaborators');
const OngoingProjects = require('../models/ongoingProjects');

const add_ongoing = (req, res) => {
    const ongoing = new OngoingProjects(
        {
            kTitle: 'Grand ICT 연구센터',
            eTitle: 'Grand ICT research cente',
            position: 'Researcher (참여연구원)',
            institution: 'Institute of Information & Communications Technology Planning & Evaluation (정보통신기획평가원)',
            date: '2020.01.01 - 2027.12.31',
            budget: '₩2,400,000,000/yr - 7 years'
        }
    );

    ongoing.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
};

const add_research = (req, res) => {
    const researchExperience = new ResearchExperience(
        {
            title: 'Development of fuel injector for 200 bar gasoline direct injection system',
            institution: 'Korea Evaluation Institute of Industrial Technology',
            date: '2012.06 – 2015.05'
        }
    );

    researchExperience.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
};

const add_collaborator = (req, res) => {
    const collaborator = new Collaborators(
        {
            institution: 'Hanyang University',
            name: 'Juhong Park',
            img: 'Hanyang.png'
        }
    );

    collaborator.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
};

const project_ongoing = (req, res) => {
    const status = 'ongoing'
    OngoingProjects.find().sort({ date: -1 }).exec()
        .then((result) => {
            res.render('project/project', { status, result });
        })
        .catch((err) => {
            console.error(err);
        });
};

const project_ongoing_write_get = (req, res) => {
    res.render('project/ongoing-write');

};

const project_ongoing_write_post = (req, res) => {
    const ongoing = new OngoingProjects(req.body);
    ongoing.save()
        .then((result) => {
            res.redirect('/project/ongoing');
        })
        .catch((err) => {
            console.log(err);
        });
};

const project_ongoing_modify_get = (req, res) => {
    OngoingProjects.findById(req.query.id)
        .then((result) => {
            res.render('project/ongoing-modify', { result });
        })
        .catch(err => {
            console.log(err);
        });
};

const project_ongoing_modify_put = (req, res) => {
    OngoingProjects.findByIdAndUpdate(req.query.id, req.body)
        .then((result) => {
            res.redirect('/project/ongoing');
        })
        .catch(err => {
            console.log(err);
        });
};

const project_ongoing_delete = (req, res) => {
    OngoingProjects.deleteOne({ _id: req.query.id })
        .then((result) => {
            res.redirect('/project/ongoing');
        })
        .catch((err) => {
            console.log(err);
        });
};

const project_research_experience = (req, res) => {
    const status = 'research'
    ResearchExperience.find().sort({ date: -1 }).exec()
        .then((result) => {
            res.render('project/project', { status, result });
        })
        .catch((err) => {
            console.error(err);
        });
};

const project_research_write_get = (req, res) => {
    res.render('project/research-write');
};

const project_research_write_post = (req, res) => {
    const research = new ResearchExperience(req.body);
    research.save()
        .then((result) => {
            res.redirect('/project/research');
        })
        .catch((err) => {
            console.log(err);
        });
};

const project_research_modify_get = (req, res) => {
    ResearchExperience.findById(req.query.id)
        .then((result) => {
            res.render('project/research-modify', { result });
        })
        .catch(err => {
            console.log(err);
        });
};

const project_research_modify_put = (req, res) => {
    ResearchExperience.findByIdAndUpdate(req.query.id, req.body)
        .then((result) => {
            res.redirect('/project/research');
        })
        .catch(err => {
            console.log(err);
        });
};

const project_research_delete = (req, res) => {
    ResearchExperience.deleteOne({ _id: req.query.id })
        .then((result) => {
            res.redirect('/project/research');
        })
        .catch((err) => {
            console.log(err);
        });
};

const project_collaborators = (req, res) => {
    const status = 'collab'
    Collaborators.find().sort().exec()
        .then((result) => {
            res.render('project/project', { status, result });
        })
        .catch((err) => {
            console.error(err);
        });
};

const project_collab_write_get = (req, res) => {
    res.render('project/collab-write');
};

const project_collab_write_post = (req, res) => {
    const collab = new Collaborators(req.body);
    collab.save()
        .then((result) => {
            res.redirect('/project/collab');
        })
        .catch((err) => {
            console.log(err);
        });
};

const project_collab_modify_get = (req, res) => {
    Collaborators.findById(req.query.id)
        .then((result) => {
            res.render('project/collab-modify', { result });
        })
        .catch(err => {
            console.log(err);
        });
};

const project_collab_modify_put = (req, res) => {
    Collaborators.findByIdAndUpdate(req.query.id, req.body)
        .then((result) => {
            res.redirect('/project/collab');
        })
        .catch(err => {
            console.log(err);
        });
};

const project_collab_delete = (req, res) => {
    Collaborators.deleteOne({ _id: req.query.id })
        .then((result) => {
            res.redirect('/project/collab');
        })
        .catch((err) => {
            console.log(err);
        });
};




module.exports = {
    add_ongoing,
    add_research,
    add_collaborator,
    project_ongoing,
    project_ongoing_write_get,
    project_ongoing_write_post,
    project_ongoing_modify_get,
    project_ongoing_modify_put,
    project_ongoing_delete,
    project_research_experience,
    project_research_write_get,
    project_research_write_post,
    project_research_modify_get,
    project_research_modify_put,
    project_research_delete,
    project_collaborators,
    project_collab_write_get,
    project_collab_write_post,
    project_collab_modify_get,
    project_collab_modify_put,
    project_collab_delete
}