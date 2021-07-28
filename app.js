const express = require('express');
const mongoose = require('mongoose');

const app = express()

mongoose.connect('mongodb://localhost:27017/movieend', {useNewUrlParser: true, useUnifiedTopology: true});

app.set('view engine', 'pug')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'));

const tasksController = require('./controller/index.js');

app.get('/api/tasks', tasksController.list)
app.post('/api/tasks', tasksController.add)


app.listen(4000)
