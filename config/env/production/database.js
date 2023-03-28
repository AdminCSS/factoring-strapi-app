const parse = require("pg-connection-string").parse;

const { host, port, database, user, password } = parse(
  process.env.DATABASE_URL
);

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host,
      port,
      database,
      user,
      password,
      ssl: true
    },
    debug: false,
    acquireConnectionTimeout: 1000000,
    pool: {
      min: 0,
      max: 1,
      acquireTimeoutMillis: 600000,
      createTimeoutMillis: 600000,
      destroyTimeoutMillis: 600000,
      idleTimeoutMillis: 30000,
      reapIntervalMillis:1000,
      createRetryIntervalMillis: 2000
    },
  },
});
