const express = require('express');
const page = require('./routes/page');
const app = express();
const port = 3001;

const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are online');
});

let userSchema = new Schema({
  userId: ObjectId,
  username: String,
  password: String,
  email: String,
});

// compile scehema
const User = mongoose.model('users', userSchema);

const user = new User({username: 'bchou', password: 'pass', email: 'brian@email.com'});
user.save(function (err, u) {
  if (err) return console.log('you have an error');
  console.log('save was successful');
});

let DeckSchema = new Schema({
  userid: String,
  decks: [{
    deckId: ObjectId,
    name: String,
    format: String,
    cards: [
      {
        scryfallUUID: String,
        count: Number,
      }
    ],
  }]
});

// app.use('/', page);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.json(user);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  let user = await User.findById(id, (err, person) => {
    if (err) return console.log(err);
    console.log('burp');
  });

  res.json(user);
});

app.post('/user/create', async (req, res) => {
  const { username, password, email } = req.body;

  await User.create({username, password, email}, (err, result) => {
    if (err) return console.log('issue with creation');
    console.log('happened');
  });

  res.send("user was created");
});

app.listen(port, () => { console.log(`example application listening at http://localhost:${port}`) });

module.exports = { app };