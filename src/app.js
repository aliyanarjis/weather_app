const express = require('express');
const app = express();
const port = process.env.PORT || 3000 ;
const path = require('path');
const hbs = require('hbs');



// public static part

const static_path = path.join(__dirname, "../public");
const tamplate_path = path.join(__dirname, "../tamplates/views");
const partials_path = path.join(__dirname, "../tamplates/partials");

app.set('view engine', 'hbs');
app.set('views', tamplate_path);
app.use(express.static(static_path));
hbs.registerPartials(partials_path)

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/about', (req, res) => {
    res.render("about");
});


app.get('/weather', (req, res) => {
    res.render("weather");
});

app.get('*', (req, res) => {
    res.render('404error'), {
        errorMgs: 'Opps Page Not Found'
    }
});


app.listen(port, () => {
    console.log(`listeningto the port at ${port}`)
});