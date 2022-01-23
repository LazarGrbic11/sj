const express = require('express');
const { sequelize } = require('./models');
const cors = require('cors');

const users = require('./routes/users');
const post = require('./routes/post');
const comment = require('./routes/comment');
const tag = require('./routes/tag');
const app = express();

var corsOptions = {
    origin: 'http://127.0.0.1:8000',
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));

app.use('/admin', users);
app.use('/admin', comment);
app.use('/admin', tag);
app.use('/admin', post);



sequelize.authenticate()
    .then(() => console.log('Konektovani ste na bazu.'))
    .catch(err => console.log('Greska: ' + err));

app.listen({port: 9000}, async() => {
    await sequelize.authenticate();
});