// Seed's pode ser usado para criar um usuário admin no site.
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { username: 'Andres dos Santos' },
        { username: 'Ana Clara' },
      ]);
    });
};
