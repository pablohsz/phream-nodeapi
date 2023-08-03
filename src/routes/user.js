const express = require('express');
const router = express.Router();


router.get('/', (req, res, next)=> {
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de usuários'
    });
});


router.post('/', (req, res, next)=> {
   
    const user ={
        username: req.body.username,
        name: req.body.name
    }

    
    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota de produtos',
        createdUser: user
    });
});



router.get('/:username',  (req, res, next)=>{
    const id = req.params.username;

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
        mensagem: 'Usando o PATCH dentro da rota de usuários'
    });
});


router.delete('/', (req, res, next)=> {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota de usuários'
    });
});

module.exports = router;