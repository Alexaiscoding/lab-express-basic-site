const express = require('express');
const app = express();
const PORT =3000;
const hbs = require ("hbs"); 


app.use(express.static(__dirname + "/public"))

app.get('/home', (req, res, next) => res.render('home-page.hbs'));
app.get('/about', (req, res, next) => res.render('about-page.hbs'));
app.get('/photos', (req, res, next) => res.render('photo-gallery-page.hbs'));
app.get('/work', (req, res, next) => res.render('work-page.hbs'));





//  home page + link to the other page on the website 

// about page basic information about the people 

//Work Page

// Phhoto Gallery page 




app.listen(3000);