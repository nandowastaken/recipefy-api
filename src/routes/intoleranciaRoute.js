const express = require('express')
const router = express.Router()

const IntoleranciaController = require('../controllers/IntoleranciaController')

router.get('/intolerancias', IntoleranciaController.buscarTodos)

router.get('/intolerancia/:id', IntoleranciaController.buscarIntolerancia)
router.post('/intolerancia', IntoleranciaController.inserirIntolerancia)
router.put('/intolerancia/:id', IntoleranciaController.editarIntolerancia)
router.delete('/intolerancia/:id', IntoleranciaController.deletarIntolerancia)


module.exports = router