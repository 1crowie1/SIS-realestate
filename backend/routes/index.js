var express = require('express');
var router = express.Router();
const properties = require('../src/data/mock_data/CalculatedProperties');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// // TO DO for @Anesu and @Harrison
// router.get('/calculateNearestProperties/', (req, res) => {
//   // Mock data
//   // data below will use some recommendations from the calculator to get the properties from the DBSCAN model
//   res.send({ body: properties });
// });

module.exports = router;
