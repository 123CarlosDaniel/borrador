const {Router} = require('express')
const router = Router()
const { redirectUser } = require('../controllers/users.controller')
const { isAuthenticated } = require('../helpers/auth')
router.get('/home',isAuthenticated ,redirectUser )

module.exports = router
