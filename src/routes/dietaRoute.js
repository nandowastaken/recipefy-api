const express = require('express')
<<<<<<< HEAD
const route = express.Router()

const dietaController = require('../controllers/dietaController.js')

router.get('/dietas', ingredienteController.buscarTodos)
=======
const router = express.Router()

const dietaController = require('../controllers/dietaController')

router.get('/dietas', dietaController.buscarTodos)
>>>>>>> 5cc1e276afbeb74af860405f3cf2576b4b1c3962

router.get('/dieta/:id', dietaController.buscarDieta)
router.post('/dieta', dietaController.inserirDieta)
router.put('/dieta/:id', dietaController.editarDieta)
router.delete('/dieta/:id', dietaController.deletarDieta)

<<<<<<< HEAD
=======

>>>>>>> 5cc1e276afbeb74af860405f3cf2576b4b1c3962
module.exports = router