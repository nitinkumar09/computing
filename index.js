const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path')
const hbs = require('hbs');
const temp_Path = path.join(__dirname, 'views/view');
const partials_path = path.join(__dirname, 'views/partials');
app.set('view engine', 'hbs');
app.set('views', temp_Path);
hbs.registerPartials(partials_path);
app.use(express.static(path.join(__dirname, 'public')))
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
app.get('/my-team', (req, res) => {
    res.render('myteam');
});
app.get('/vision', (req, res) => {
    res.render('vision');
});
app.get('/placement', (req, res) => {
    res.render('placement');
});
app.get('/internship', (req, res) => {
    res.render('internship');
});
app.get('/infrastructure-management', (req, res) => {
    res.render('infrastructuremanagement');
});
app.listen(port, (req, res) => {
    console.log(`server is runing port no. ${port}`);
})