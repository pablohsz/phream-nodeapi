const express = require('express');
const router = express.Router();
const dao = require('../dao/userDao');
const { user } = require('../dbconfig');


router.get('/', async (req, res, next)=> {

    let users = await dao.selectUsers();

    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de usuários',
        users: users
    });
});


router.post('/', async (req, res, next)=> {
   
    let user = await dao.insertUser(req.body.username, req.body.password, req.body.nick);
    
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