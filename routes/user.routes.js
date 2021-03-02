const {Router} = require('express')
const User = require('../controllers/users.controllers')


const router = Router()



router.get('/user', User.findAll)
router.post('/user', User.create)



module.exports = router
