const express = require('express');
const router = express.Router();

const tagsController =  require('../controllers/tagsController');

router.get('/tag', tagsController.buscarTodos);

router.get('/tag/:id', tagsController.buscarTag);
router.post('/tag', tagsController.inserirTag);
router.put('/tag/:id', tagsController.editarTag);
router.delete('/tag/:id', tagsController.deletarTag);

module.exports = router; 