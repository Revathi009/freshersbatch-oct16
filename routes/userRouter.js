const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')

// router.get('/refresh_token', userCtrl.refreshToken)

router.post("/register", userCtrl.register)

router.post('/login', userCtrl.login)

router.get('/logout', userCtrl.logout)

module.exports = router