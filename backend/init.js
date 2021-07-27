const express = require("express");
const deck = require("./routes/deck");
const session = require("express-session");
//  const MongoStore = require("connect-mongo")(session);
const app = express();
const port = 3001;
const util = require("util");
const bodyParser = require("body-parser");

// const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Types;
// const { Schema } = mongoose;

// const mongooseSettings = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// mongoose.connect("mongodb://localhost:27017/test", mongooseSettings);
// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error:"));
// db.once('open', function() {
//   console.log('we are online');
// });

// let userSchema = new Schema({
//   userId: ObjectId,

// let UsersSchema = new Schema({
//   username: String,
//   password: String,
//   email: String,
// });

// compile scehema
// const User = mongoose.model('users', userSchema);

// const user = new User({username: 'bchou', password: 'pass', email: 'brian@email.com'});
// user.save(function (err, u) {
//   if (err) return console.log('you have an error');
//   console.log('save was successful');
// });

// app.use('/', page);

// let userSchema = new Schema({
//   userId: ObjectId,
//   username: String,
//   password: String,
//   email: String,
// });

// compile scehema
// const User = mongoose.model('users', userSchema);

// const user = new User({username: 'bchou', password: 'pass', email: 'brian@email.com'});
// user.save(function (err, u) {
//   if (err) return console.log('you have an error');
//   console.log('save was successful');
// });

// sub documnets have pre save and pre validate middleware
// nested paths
// const cardSchema = new Schema({
//   scryfallUUID: String,
//   count: Number,
// });

// const deckSchema = new Schema({
//   id: ObjectId,
//   author: String,
//   name: String,
//   format: String,
//   cards: [cardSchema],
// });

// const deckListSchema = new Schema({
//   owner: String,
//   userid: ObjectId,
//   decks: [deckSchema],
// });

// const Decklist = mongoose.model("decklist", deckListSchema);

// const list = new Decklist({ owner: "brian" });

app.use(
  session({
    secret: "somesecret",
    // store: new MongoStore({ mongooseConnection: db }),
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/deck", deck);

// redirect to homepage if user is not logged in
// send to login page instead? create a bland html page that handles this?
// app.use((req, res, next) => {
//   if (req.session.user == null) {
//     res.redirect('/');
//   } else {
//     next();
//   }
// });

// app.get('/user/:id', async (req, res) => {
//   const { id } = req.params;
//   let user = await User.findById(id, (err, result) => {
//     if (err) return console.log(err);
//     console.log(result);
//   });

//   res.json(user);
// });

/*
user has an account
user doesnt have an account

user registration for users that doent have an account:
form creatation:
  username
  password
  email - account identifier
  maybe add oauth stuff here
*/

// several checks need to happen
// check unique identifier email has not been used already
// verify email
// google oauth

// app.post('/user/create', async (req, res) => {
//   const { username, password, email } = req.body;
//   await User.create({username, password, email}, (err, result) => {
//     if (err) return console.log('issue with creation');
//     console.log(result);
//   });
//   res.send("user was created");
// });

// if we are in a test do not run this
module.exports = app;
