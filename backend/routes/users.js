var express = require('express');
var router = express.Router();

// /* GET users listing. */  ---> DO WE HAVE USERS??? WHY DO WE NEED THIS?
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
