const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const educationAndExperiencesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const EducationAndExperiences = mongoose.model('EducationAndExperiences', educationAndExperiencesSchema);
module.exports = EducationAndExperiences;

/*
    
[
    {
        "title":"Degree of Doctor of Philosophy (Advisor: Junhong Park)",
        "info":"Mechanical Engineering, Hanyang University, Seoul, Korea",
        "date":"2013.09 – 2018.08"
    },
    {
        "title":"Post-doctoral researcher (Advisor: Guillaume Haïat, Co-advisor: Vu-Hieu Nguyen)",
        "info":"Multiscale Modeling and Simulation (MSME), French national center for scientific research (CNRS) / Université Paris Est, Paris, France",
        "date":"2018.09 – 2019.08"
    },
    {
        "title":"Post-doctoral researcher (Advisor: Young L. Kim)",
        "info":"Weldon School of Biomedical Engineering, Purdue University, West Lafayette, USA",
        "date":"2019.09 – 2021.08"
    },
    {
        "title":"Assistant Professor",
        "info":"Mechanical System Engineering, Kumoh National Institute of Technology, Gumi, Korea",
        "date":"2021.09 – Present "
    }
]

*/