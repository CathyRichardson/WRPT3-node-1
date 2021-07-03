// import express from 'express';
const express = require('express'); //imports express

const app = express(); //initialize express application into variable called app

//middlewares
app.use(express.json()); //allows us to access the body of requests

const superHeroes = ['Super Man', "Bat Man", "Aquaman", "Thor", "Thanos", "John Snow"]; //this would be our Database!

//endpoints
app.get('/api/superheroes', (req, res, next) => {
    let responseHeros = superHeroes;
    if(req.query.hero){
        responseHeros = superHeroes.filter(e => e.toLowerCase() === req.query.hero.toLowerCase())[0]
    }
    res.status(200).json(responseHeros); //res.json and res.send are interchangeable and are used to send response data back to client side
})

app.get('/api/superheroes/:name', (req, res, next) => { 
//to add multiple params you just add more '/:paramName' on end of endpoint 
//EG. /api/superheroes/:name/:id/:powers etc if you wanted additional param data
    console.log(req.params);
    const superHero = superHeroes.filter(e => e.toLowerCase() === req.params.name.toLowerCase())[0]
    res.status(200).json(superHero); //res.json and res.send are interchangeable and are used to send response data back to client side
})

// app.post('/api/superheroes')
// app.put('/api/superheroes')
// app.delete('/api/superheroes')

app.listen(5050, () => console.log('listening on port 5050')) // starts express listening for reuests on given port