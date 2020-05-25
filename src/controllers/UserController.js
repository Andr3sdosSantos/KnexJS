const knex = require('../database/index');

module.exports = {
  async index(req, res) {
    const users = await knex('users').then();

    return res.json(users);
  },

  async store(req, res, next) {
    try {
      const { username } = req.body;

      await knex('users').insert({
        username,
      });

      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { username } = req.body;

      await knex('users')
        .update({ username })
        .where({ id });

      return res.send();
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    const { id } = req.params;

    try {
      await knex('users')
        .where({ id })
        .delete();

      return res.send(); 
    } catch (error) {
      next(error);
    }
  },
}