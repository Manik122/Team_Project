var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');


router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/survey', indexController.displaySurveyPage);

module.exports = router;
