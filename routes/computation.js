var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function (req, res, next) {
    var D = Math.floor(Math.random() *10)
    var R = Math.floor(Math.random() *10)

    function cos(D, R) {
        return Math.acosh(D) * R;
    }

    if(req.query.D){
        D = req.query.D;
    }
    if(req.query.R){
        R = req.query.R;
    }

    res.send(`Math.acosh applied on ${D} and ${R} is ${acosh(D, R)}`);
});

module.exports = router;