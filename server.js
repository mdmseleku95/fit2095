//https://hub.packtpub.com/building-movie-api-express/
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const actors = require('./routers/actor');
const movies = require('./routers/movie');
let path = require('path');

const app = express();

app.listen(8080);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


mongoose.connect('mongodb://localhost:27017/fit2095db', function (err) {
    if (err) {
        return console.log('Mongoose - connection error:', err);
    }
    console.log('Connect Successfully');

});

//Configuring Endpoints
//Actor RESTFul endpoionts 
app.get('/actors', actors.getAll);//Task 6.
app.post('/actors', actors.createOne);
app.get('/actors/:id', actors.getOne);
app.put('/actors/:id', actors.updateOne);
app.post('/actors/:id/movies', actors.addMovie);
app.delete('/actors/:id', actors.deleteOne);

//Additional Methods:
app.delete('/actors/:id/:mid', actors.deleteMovie);//Task 3.


//Movie RESTFul  endpoints
app.get('/movies', movies.getAll);//Task 7
app.post('/movies', movies.createOne);
app.get('/movies/:id', movies.getOne);
app.put('/movies/:id', movies.updateOne);
app.delete('/movies/:id', movies.deleteOne);//Task 1 
app.post('/movies/:id/actors', movies.addActor);//Task 4.
app.get('/movies/:y1/:y2',movies.getSpecAll);//Task 5

//Additional Methods:
app.delete('/movies/:id/:aid', movies.deleteActor);//Task 2.

//Task 1: Delete using ID in URL params
//Task 2: Remove Movie done by a scpecific Actor (Use the URL to add the ids)
//Task 3:Remove Actor from list of Movies (Use the URL to place the ids)
//Task 4: You specify the actor's ID in the body as: id Key Value
//Task 5: Specify the years(Staring with the big to the small) in the URL)
//Task 6: Update the getAll methods using the ".populate()" method
//Task 7: Update the getAll methods using the ".populate()" method
app.use("/", express.static(path.join(__dirname, "dist/movieAng")));
app.use("/*", express.static(path.join(__dirname, "dist/movieAng")));
