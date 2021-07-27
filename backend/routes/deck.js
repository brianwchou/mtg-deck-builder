const router = require("express").Router();

router.get("/list", (req, res) => {
  // let decklist = await Decklist.findOne({ owner: "brian" });

  console.log(decklist);

  let data = decklist.decks.map((deck) => {
    return {
      name: deck.name,
      format: deck.format,
    };
  });

  res.send(data);
});

// requires a deck name parameter
router.get("/", (req, res) => {
  const { name } = req.params;

  let deck = { message: "showing get" };

  // let decklist = await Decklist.findOne({ owner: "brian" });
  // let deck = decklist.decks.find((deck) => {
  //   return deck.name === name;
  // });

  res.send(deck ?? {});
});

// add a deck
router.post("/add", (req, res) => {
  const deck = req.body;

  // let decklist = await Decklist.findOne({ owner: "brian" });

  // decklist.decks.push(deck);
  // decklist.save((err) => {
  //   if (err) return console.log(err);
  //   console.log("deck has been saved");
  // });

  res.send("deck recieved");
});

router.delete("/delete", (req, res) => {
  let id = req.query.id;

  // let decklist = await Decklist.findOne({ owner: "brian" });

  // decklist.decks.pull({ _id: id });

  // decklist.save((err, result) => {
  //   if (err) return console.log(err);
  //   console.log("removed deck");
  // });

  res.send("deleting a deck");
});

module.exports = router;
