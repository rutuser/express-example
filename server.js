const express = require('express');
const app = express();

const users = [{id: '0', name: 'Pepe'}, {id: '1', name: 'Juan'}];

app.get('/', (req,res) => {
    console.log(req.headers);
    res.json(users);
});

app.listen(3000);

app.get('/users', (req,res) => {
    res.json(users);
});

app.post('/users', (req,res) => {
    const newUser = req.body;
    newUser.Id = Math.random();
    users.push(newUser);
    res.json(newUser);
});

app.get('/users/:id', (req,res) => {
    const userId = req.params.id;
    const user = users.find(user => user.id === userId || user.name === userId);
    res.json(user);
});