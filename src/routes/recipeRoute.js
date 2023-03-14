const express = require('express')
const router = express.Router() 

const recipeController = require('../controllers/recipeController')

router.get('/recipes', recipeController.buscarTodos)

router.get('/recipes/:id', recipeController.buscarReceita)
router.post('/recipes', recipeController.inserirReceita)
router.put('/recipes/:id', recipeController.editarReceita)
router.delete('/recipes/:id', recipeController.excluirReceita)

module.exports = router