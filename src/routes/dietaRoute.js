const express = require('express')
const router = express.Router()

const dietaController = require('../controllers/dietaController')

router.get('/dietas', dietaController.buscarTodos)

router.get('/dieta/:id', dietaController.buscarDieta)
router.post('/dieta', dietaController.inserirDieta)
router.put('/dieta/:id', dietaController.editarDieta)
router.delete('/dieta/:id', dietaController.deletarDieta)

module.exports = router