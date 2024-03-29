var express = require('express');
var router = express.Router();

const queries = require('../db/queries');

/* GET all shows. */
router.get('/shows', (req, res, next) => {
    queries
        .getAll()
        .then((shows) => {
            res.status(200).json(shows);
        })
        .catch((error) => {
            next(error);
        });
});

// GET single show.
router.get('/shows/:id', (req, res, next) => {
    queries
        .getSingle(req.params.id)
        .then((show) => {
            res.status(200).json(show);
        })
        .catch((error) => {
            next(error);
        });
});

// Add show
router.post('/shows', (req, res, next) => {
    queries
        .add(req.body)
        .then((showID) => {
            return queries.getSingle(showID);
        })
        .then((show) => {
            res.status(200).json(show);
        })
        .catch((error) => {
            next(error);
        });
});

// Update show
router.put('/shows/:id', (req, res, next) => {
    if (req.body.hasOwnProperty('id')) {
        return res.status(422).json({
            error: 'You cannot update the id field',
        });
    }

    queries
        .update(req.params.id, req.body)
        .then(() => {
            return queries.getSingle(req.params.id);
        })
        .then((show) => {
            res.status(200).json(show);
        })
        .catch((error) => {
            next(error);
        });
});

// Delete show
router.delete('/shows/:id', (req, res, next) => {
    // The Knex delete() function returns a number indicating the number of rows
    // in the database that have been affected, so to return the deleted object,
    // we must query for it first.
    queries
        .getSingle(req.params.id)
        .then((show) => {
            queries
                .deleteItem(req.params.id)
                .then(() => {
                    res.status(200).json(show);
                })
                .catch((error) => {
                    next(error);
                });
        })
        .catch((error) => {
            next(error);
        });
});

module.exports = router;
