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

function add(show) {
    return Shows().insert(show, 'id');
}

function update(showID, updates) {
    return Shows().where('id', parseInt(showID)).update(updates);
}

module.exports = {
    getAll,
    getSingle,
    add,
    update,
};
