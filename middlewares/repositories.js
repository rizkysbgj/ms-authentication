const knex = require('knex');

const config = require('../config');

const repositories = (req, res, next) => {
  const db = knex({
    client: 'mysql2',
    connection: {
      host: config.database.host,
      user: config.database.user,
      password: config.database.password,
      database: config.database.name
    }
  });

  Object.assign(res.locals, { });

  next();
}

module.exports = [repositories];
