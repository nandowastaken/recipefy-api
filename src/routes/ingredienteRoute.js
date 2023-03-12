const express = require('express')
const router = express.Router()

const ingredienteController = require('../controllers/ingredienteController')

router.get('/ingredientes', ingredienteController.buscarTodos)

router.get('/ingrediente/:id', ingredienteController.buscarIngrediente)
router.post('/ingrediente', ingredienteController.inserirIngrediente)
router.put('/ingrediente/:id', ingredienteController.editarIngrediente)
router.delete('/ingrediente/:id', ingredienteController.deletarIngrediente)

module.exports = router