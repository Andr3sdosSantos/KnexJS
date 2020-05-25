// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: 'postgres',
      host: '127.0.0.1',
      database: 'knexjs',
      password: 'docker',
      port: '5432'
    }, 
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
  },

};
