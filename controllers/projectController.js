const Collaborators = require('../models/collaborators');
const Projects = require('../models/projects');

const add_project = (req, res) => {
    const project = new Projects(
        {
            kTitle: 'Grand ICT 연구센터',
            eTitle: 'Grand ICT research cente',
            position: 'Researcher (참여연구원)',
            institution: 'Institute of Information & Communications Technology Planning & Evaluation (정보통신기획평가원)',
            date: '2020.01.01 - 2027.12.31',
            budget: '₩2,400,000,000/yr - 7 years'
        }
    );

    project.save()
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

const project_index = async (req, res) => {
    try {
        const query1 = Projects.find().sort({ date: -1 }).exec();
        const query2 = Collaborators.find().exec();

        const [project, collab] = await Promise.all([query1, query2]);

        res.render('project/project', { project, collab });
    } catch (error) {
        console.error(error);
    };
};

const project_write_get = (req, res) => {
    res.render('project/project-write');

};

const project_write_post = (req, res) => {
    const project = new Projects(req.body);
    project.save()
        .then((result) => {
            res.redirect('/project');
        })
        .catch((err) => {
            console.log(err);
        });
};

const project_modify_get = (req, res) => {
    Projects.findById(req.query.id)
        .then((result) => {
            res.render('project/project-modify', { result });
        })
        .catch(err => {
            console.log(err);
        });
};

const project_modify_put = (req, res) => {
    Projects.findByIdAndUpdate(req.query.id, req.body)
        .then((result) => {
            res.redirect('/project');
        })
        .catch(err => {
            console.log(err);
        });
};

const project_delete = (req, res) => {
    Projects.deleteOne({ _id: req.query.id })
        .then((result) => {
            res.redirect('/project');
        })
        .catch((err) => {
            console.log(err);
        });
};

const project_collab_write_get = (req, res) => {
    res.render('project/collab-write');
};

const project_collab_write_post = (req, res) => {
    const collab = new Collaborators(req.body);
    collab.save()
        .then((result) => {
            res.redirect('/project');
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
            res.redirect('/project');
        })
        .catch(err => {
            console.log(err);
        });
};

const project_collab_delete = (req, res) => {
    Collaborators.deleteOne({ _id: req.query.id })
        .then((result) => {
            res.redirect('/project');
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = {
    add_project,
    add_collaborator,
    project_index,
    project_write_get,
    project_write_post,
    project_modify_get,
    project_modify_put,
    project_delete,
    project_collab_write_get,
    project_collab_write_post,
    project_collab_modify_get,
    project_collab_modify_put,
    project_collab_delete
}