const express = require('express')
const route = express.Router()

const dietaController = require('../controllers/dietaController.js')

router.get('/dietas', ingredienteController.buscarTodos)

router.get('/dieta/:id', dietaController.buscarDieta)
router.post('/dieta', dietaController.inserirDieta)
router.put('/dieta/:id', dietaController.editarDieta)
router.delete('/dieta/:id', dietaController.deletarDieta)

module.exports = router