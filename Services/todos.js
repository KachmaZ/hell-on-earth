const express = require('express');
const bodyParser = require('body-parser');
const todos = require('../Databases/todo.json');
const path = require('path')

const app = express();
app.get('/', (req, res) => {
    // #swagger.description = 'Get index.html'
    // возвращаемый ответ
    /* #swagger.responses[200] = {
        description: 'index.html',
    }
 } */
    res.status(200).sendFile(path.join(__dirname, '/..', '/index.html'));
})

app.get('/todos', (req, res) =>{
            res.status(200).json(todos)
})

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    todos.push(req.body.newTodo)
    res.status(201).send(req.body.newTodo)
})

app.delete('/todos/:index', (req, res) => {
    todos.splice(req.params.index, 1)
    res.status(200).json("OK")
})

module.exports.app = app