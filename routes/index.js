var express = require('express');
var router = express.Router();

const queries = require('../db/queries');

/* GET all shows. */
router.get('/shows', function (req, res, next) {
    queries
        .getAll()
        .then((shows) => {
            res.status(200).json(shows);
        })
        .catch((error) => {
            next(error);
        });
});

module.exports = router;
