const express = require('express');
const router = express.Router();

const intoleranciaController = require('../controllers/intoleranciaController');

router.get('/intolerancias', intoleranciaController.buscarTodos);

router.get('/intolerancia/:id', intoleranciaController.buscarIntolerancia);
router.post('/intolerancia', intoleranciaController.inserirIntolerancia);
router.put('/intolerancia/:id', intoleranciaController.editarIntolerancia);
router.delete('/intolerancia/:id', intoleranciaController.deletarIntolerancia);


module.exports = router;