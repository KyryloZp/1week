const express = require('express')
const config = require('config')
const app = express()
const port = config.get('PORT')
const bodyParser = require('body-parser')
const User = require('./controllers/users.controllers')
const Group = require('./controllers/group.controllers')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', User.findAll)
app.post('/user', User.create)
app.get('/user/:uid', User.getUserById)

app.get('/group/:uid', Group.getUsersGroupById)
app.post('/group', Group.create)


app.listen(port);
console.log('API server started on: ' + port);

