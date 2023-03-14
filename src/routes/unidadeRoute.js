const express = require('express')
const router = express.Router()

const UnidadeController = require('../controllers/UnidadeController')

router.get('/unidades', UnidadeController.buscarTodos)

router.get('/unidade/:id', UnidadeController.buscarUnidade)
router.post('/unidade', UnidadeController.inserirUnidade)
router.put('/unidade/:id', UnidadeController.editarUnidade)
router.delete('/unidade/:id', UnidadeController.deletarUnidade)


module.exports = router