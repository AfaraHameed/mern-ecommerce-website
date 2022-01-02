const express = require("express")
const router = express.Router()
const {validateSignupRequest , isRequestValidated , validateSigninRequest} = require('../../validator/auth')

const User = require('../../models/user')
const { signup } =require('../../controller/admin/auth')
const { signin } =require('../../controller/admin/auth')
//const { requireSignin } =require('../../controller/admin/auth')
router.post('/admin/signin' , validateSigninRequest , isRequestValidated , signin)

router.post('/admin/signup',validateSignupRequest,isRequestValidated, signup)
// router.post('/profile', requireSignin, (req,res) => {

//     res.status(200).json({ user : 'profile' })
// })





module.exports = router