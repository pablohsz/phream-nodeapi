const express = require('express');
const router = express.Router();
const dao = require('../dao/creatorDao');


//Retorna todos os pedidos 
router.get('/', async (req, res, next)=> {

    let busca = await dao.selectCreator();

    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de criadores',
        resultado: busca
    });
});

//Insere um pedido
router.post('/', (req, res, next)=> {




    pg.getConnection((error, conn) =>{
        conn.query(
            'INSERT INTO creators (creatorname, creator_pass, creator_nick, creator_email, creator_phone, creator_country, creator_photo, creator_bio) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
            [req.body.name, req.body.pass, req.body.nick, req.body.email, req.body.phone, req.body.country, req.body.photo, req.body.bio],
            (error, resultado, field) =>{
                conn.release();
            }
        )
    });




    const pedido = {
        id_pedido: req.body.id_pedido,
        items: req.body.items
    }

    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota de pedidos',
        pedido: pedido
    });
});


//Retorna um pedido em especifíco
router.get('/:id_pedido',  (req, res, next)=>{
    const id = req.params.id_pedido;

    if (id == 1){
        res.status(200).send({
            mensagem: 'Você descobriu um ID especial',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Você passou um ID como parâmetro',
            id: id
        });
    }
});



router.delete('/', (req, res, next)=> {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota de pedidos'
    });
});


async function inserirDados() {
    const pool = createConnection(); // Cria uma nova conexão
  
    try {
      // Query de inserção
      const queryString = 'INSERT INTO sua_tabela (coluna1, coluna2) VALUES ($1, $2)';
      const values = ['valor1', 'valor2']; // Valores que serão inseridos nas colunas
  
      // Executa a query de inserção
      const result = await pool.query(queryString, values);
  
      console.log('Inserção realizada com sucesso!');
      console.log('Linhas afetadas:', result.rowCount);
    } catch (err) {
      console.error('Erro ao inserir dados:', err);
    } finally {
      // Fecha a conexão após a inserção
      pool.end();
    }
  }

module.exports = router;