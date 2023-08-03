const express = require('express');
const router = express.Router();


//Return all products 
router.get('/', (req, res, next)=> {
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de produtos'
    });
});

//Insert a product 
router.post('/', (req, res, next)=> {
    const produto ={
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }

    
    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota de produtos',
        produtoCriado: produto
    });
});


//Return a specific product
router.get('/:id_produto',  (req, res, next)=>{
    const id = req.params.id_produto;

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

router.patch('/', (req, res, next)=> {
    res.status(201).send({
        mensagem: 'Usando o PATCH dentro da rota de produtos'
    });
});


router.delete('/', (req, res, next)=> {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota de produtos'
    });
});

module.exports = router;