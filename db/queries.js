const knex = require('./knex');

// A helper function for simplifying each individual query.
function Shows() {
    return knex('shows');
}

// =============================================================================
// Queries
// =============================================================================

// Query the database to get all shows.
function getAll() {
    return Shows().select();
}

function getSingle(showID) {
    return Shows().where('id', parseInt(showID)).first();
}

module.exports = {
    getAll,
    getSingle,
};
