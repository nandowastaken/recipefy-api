const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.get('/user/:id', userController.buscarUser)
router.post('/user', userController.inserirUser)

module.exports = router