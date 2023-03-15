const express = require('express')
const router = express.Router()

const unidadeController = require('../controllers/unidadeController')

router.get('/unidades', unidadeController.buscarTodos)

router.get('/unidade/:id', unidadeController.buscarUnidade)
router.post('/unidade', unidadeController.inserirUnidade)
router.put('/unidade/:id', unidadeController.editarUnidade)
router.delete('/unidade/:id', unidadeController.deletarUnidade)


module.exports = router