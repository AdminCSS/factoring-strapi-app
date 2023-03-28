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
      ssl: true,
    },
    debug: false,
  },
});
