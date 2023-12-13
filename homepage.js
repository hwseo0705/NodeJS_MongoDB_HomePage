const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));

app.use(session({
    secret: 'somesecret',
    cookie: { maxAge: 30000000},
    resave: true,
    saveUninitialized: false
}));

app.use(function (req, res, next) {
    // res.locals.isAdmin = req.session.username;
    res.locals.isAdmin = 'admin';
    next();
});

const user = {
    username : 'admin',
    password : '12345'
};

const homeRoutes = require('./routes/homeRoutes');
const newsRoutes = require('./routes/newsRoutes');
const piRoutes = require('./routes/piRoutes');
const memberRoutes = require('./routes/memberRoutes');
const researchRoutes = require('./routes/researchRoutes');
const projectRoutes = require('./routes/projectRoutes');
const publicationRoutes = require('./routes/publicationRoutes');
const photoRoutes = require('./routes/photoRoutes');
const loginRoutes = require('./routes/loginRoutes');

// connect to MongoDB
const dbURI = 'mongodb+srv://seo58:0924push@cluster0.sdirjwn.mongodb.net/NodeJS_MongoDB_HomePage?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => app.listen(8183))
    .catch((err) => console.log(err));
    
app.set('view engine', 'ejs');

//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/course', (req, res) => {
    res.render('course');
});

app.use(homeRoutes);
app.use(newsRoutes);
app.use(piRoutes);
app.use(memberRoutes);
app.use(researchRoutes);
app.use(projectRoutes);
app.use(publicationRoutes);
app.use(photoRoutes);
app.use(loginRoutes);