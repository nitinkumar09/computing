const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const hbs = require('hbs');
const temp_Path = path.join(__dirname, 'views/view');
const partials_path = path.join(__dirname, 'views/partials');

app.set('view engine', 'hbs');
app.set('views', temp_Path);
hbs.registerPartials(partials_path);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index')
});
app.get('/signuppage1', (req, res) => {
    res.render('signuppage1')
});
app.get('/login', (req, res) => {
    res.render('login')
});
app.get('/product', (req, res) => {
    res.render('product')
});
app.get('/As-a-trainer', (req, res) => {
    res.render('asatrainer')
});

app.get('/partners-with-us', (req, res) => {
    res.render('partnerswithus')
});
app.get('/resourcecenter', (req, res) => {
    res.render('resourcecenter')
});
app.get('/contactus', (req, res) => {
    res.render('contactus')
});
app.get('/consultation', (req, res) => {
    res.render('consultation')
});
app.get('/toggleform', (req, res) => {
    res.render('toggleform')
});
app.get('/aboutus', (req, res) => {
    res.render('aboutus')
});
app.get('/Value-Proposition', (req, res) => {
    res.render('valueproposition')
});
app.get('/services', (req, res) => {
    res.render('service')
});
app.get('/career', (req, res) => {
    res.render('career')
});
// app.get('/my-team', (req, res) => {
//     res.render('myteam');
// });
app.get('/vision', (req, res) => {
    res.render('vision');
});
app.get('/placement', (req, res) => {
    res.render('placement');
});
app.get('/internship', (req, res) => {
    res.render('internship');
});
app.get('/blockchain', (req, res) => {
    res.render('blockchain');
});
app.get('/infrastructure-management', (req, res) => {
    res.render('infrastructuremanagement');
});
app.get('/fullstack', (req, res) => {
    res.render('fullstack');
});
app.get('/training/soft-skill', (req, res) => {
    res.render('softskill');
});
app.get('/ai-tools-training', (req, res) => {
    res.render('aitoolstraining');
});
app.get('/portfolio', (req, res) => {
    res.render('portfolio');
});

// 404 error handling middleware
app.use((req, res, next) => {
    res.status(404).render('error', {
        statusCode: 404,
        errorMessage: 'Page Not Found',
        errorDescription: 'Sorry, the page you are looking for does not exist.'
    });
});

// 400 Bad Request error handling middleware
app.use((err, req, res, next) => {
    if (err.status === 400) {
        res.status(400).render('error', {
            statusCode: 400,
            errorMessage: 'Bad Request',
            errorDescription: 'The server could not understand your request.'
        });
    } else {
        next(err);
    }
});

// Generic error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).render('error', {
        statusCode: err.status || 500,
        errorMessage: err.message,
        errorDescription: 'An unexpected error occurred.'
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
