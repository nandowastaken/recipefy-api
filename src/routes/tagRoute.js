const express = require('express')
const router = express.Router()

const tagsController =  require('../controllers/tagsController')

router.get('/tag', tagsController.buscarTodos)

router.get('/tag/:tag', tagsController.buscarTag)
router.post('tag', tagsController.inserirTag)
router.put('tag/:tag', tagsController.editarTag)
router.delete('tag/:tag', tagsController.deletarTag)