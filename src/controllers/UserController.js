const knex = require('../database/index');

module.exports = {
  async index(req, res) {
    const users = await knex('users').then();

    return res.json(users);
  }
}