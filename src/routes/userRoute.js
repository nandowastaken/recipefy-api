const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/users', userController.buscarTodos);

router.get('/user/:id', userController.buscarUser);
router.post('/user', userController.inserirUser);
router.put('/user/:id', userController.editarUser);
router.delete('/user/:id', userController.excluirUser);


module.exports = router;