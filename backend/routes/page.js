const router = require('express').Router();

router.get('/bloop/:id', (req, res) => {
  console.log(req.params);
  res.end();
});

router.get('/thing', (req, res) => {
  res.end();
});

module.exports = router;