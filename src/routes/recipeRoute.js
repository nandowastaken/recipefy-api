const express = require('express')
const router = express.Router() 

const recipeController = require('../controllers/recipeController')

router.get('/recipes', recipeController.buscarTodos)

router.get('/recipe/:id', recipeController.buscarReceita)
router.post('/recipe', recipeController.inserirReceita)
router.put('/recipe/:id', recipeController.editarReceita)
router.delete('/recipe/:id', recipeController.excluirReceita)

module.exports = router