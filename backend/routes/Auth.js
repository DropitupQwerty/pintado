const express = require('express')
const { RegisterUser } = require('../controllers/auth/post')
const router = express.Router()



router.post("/register" , RegisterUser)



module.exports = router