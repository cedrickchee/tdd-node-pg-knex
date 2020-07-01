require('dotenv').config();

module.exports = {

  test: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL_TEST,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  },

  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL_DEV,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/db/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL_PROD,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/db/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/production'
    }
  }

};
