const express = require("express")

const router = express.Router()
const User = require('../models/user')
const { signup } =require('../controller/auth')
const { signin } =require('../controller/auth')
//const { requireSignin } =require('../controller/auth')
const {validateSignupRequest , isRequestValidated , validateSigninRequest} = require('../validator/auth')
router.post('/signin', validateSigninRequest,isRequestValidated, signin)

router.post('/signup',validateSignupRequest,isRequestValidated,signup)
// router.post('/profile', requireSignin, (req,res) => {

//     res.status(200).json({ user : 'profile' })
// })





module.exports = router