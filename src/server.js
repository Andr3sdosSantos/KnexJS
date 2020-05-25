const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json())
app.use(routes);

/**
 * Tentativa de retornar o nome do error por padrão.
 */
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });

});

app.listen(3333, () => {
  console.log(`Server is runing...`);
})