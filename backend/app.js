const express = require('express');
const page = require('./routes/page');
const app = express();
const port = 3001;

const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are online');
});

let UsersSchema = new Schema({
  username: String,
  password: String,
  email: String,
  userID: ObjectId,
});

let DeckSchema = new Schema({
  userid: String,
  decks: [{
    deck: name,
    format: String,
    cards: [Number],
  }]
});

app.use('/', page);

app.listen(port, () => { console.log(`example application listening at http://localhost:${port}`) });

module.exports = { app };