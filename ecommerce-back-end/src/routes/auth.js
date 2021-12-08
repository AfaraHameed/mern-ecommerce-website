const express = require("express")
const router = express.Router()
const User = require('../models/user')
const { signup } =require('../controller/auth')
const { signin } =require('../controller/auth')
router.post('/signin', signin)

router.post('/signup', signup)





module.exports = router