var express = require('express');
var router = express.Router();

var free = false;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/setFree', function(req, res, next) {
    if (typeof req.body.free === 'undefined' || req.body.free === null) {
        res.send(JSON.stringify(req.body));
        res.send(400);
    } else {
        if (req.body.free === true) {
            free = true;
            res.send(200);
        } else if (req.body.free === false) {
            free = false;
            res.send(200);
        } else {
            res.send(JSON.stringify(req.body));
            res.send(400);
        }
    }
});

router.get('/isFree', function(req, res, next) {
    res.send(free);
})

module.exports = router;
