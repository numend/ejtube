// const express = require('express')
import express from "express";
import morgan from "morgan";    //for logging
import helmet from "helmet";    //for protect
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express()

const PORT = 4000;

// function handleListening() {
//     console.log(`Listening on http://localhost:${PORT}`);
    
// }
const handleListening =  () => console.log(`Listening on http://localhost: ${PORT}`);

// function handleHome(req, res) {
//     console.log('Hi from home!!');
//     console.log(req);
//     res.send("it's send");
// }

const handleHome = (req, res) => res.send("it's sendsdfdsf");

// function handProfile(req, res) {
//     res.send("You are on my profile"); 
// }
const handProfile = (req, res) => res.send("You are on my profile");

const betweenHome = (req, res, next) => {
    console.log("I'm between");
    next();
}

app.use(cookieParser);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));
app.use(helmet()); //for protect
app.use(morgan("dev"));


const middleware = (req, res, next) => {
    res.send('not happening');
}

app.get("/",middleware, handleHome);
app.get("/profile",handProfile);

// const handleListening = () => {

// }

app.listen(PORT, handleListening);