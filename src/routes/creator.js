const express = require('express');
const router = express.Router();
const dao = require('../dao/creatorDao');



router.get('/', async (req, res, next)=> {

    let creators = await dao.selectCreators();

    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de criadores',
        creators: creators
    });
});


router.post('/', (req, res, next)=> {

    const pedido = {
        id_pedido: req.body.id_pedido,
        items: req.body.items
    }

    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota de criadores',
        pedido: pedido
    });
});


router.get('/:creatorname',  (req, res, next)=>{
    const id = req.params.creatorname;

    if (id == 1){
        res.status(200).send({
            mensagem: 'Creatorname encontrado',
            creatorname: creatorname
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
        mensagem: 'Usando o DELETE dentro da rota de criadores'
    });
});

module.exports = router;