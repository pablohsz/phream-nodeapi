// app.js (ou server.js, dependendo do nome do seu arquivo)
const pg = require('pg');
const dbConfig = require('./dbconfig');

// Cria um pool de conexões com o banco de dados
const client = new pg.Client(dbConfig);

// Agora você pode usar o pool para executar consultas no banco de dados
// pool.query('SELECT * FROM sua_tabela', (err, result) => {
//   if (err) {
//     console.error('Erro ao executar consulta:', err);
//   } else {
//     console.log('Resultado:', result.rows);
//   }
// });

// Resto da configuração da API e rotas...

module.exports = client;