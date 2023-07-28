const express = require('express');
const router = express.Router();


//Retorna todos os pedidos 
router.get('/', (req, res, next)=> {
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de pedidos'
    });
});

//Insere um pedido
router.post('/', (req, res, next)=> {
    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota de pedidos'
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

module.exports = router;