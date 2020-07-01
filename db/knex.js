// Specify the environment (test, development, or production) for Knex
const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[environment];

module.exports = require('knex')(config);
