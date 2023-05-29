import express from 'express'
import { getuserProfile, login, register } from '../controllers/userControllers.js'
const router=express.Router()
router.route('/').post(register)
router.route('/Profile').post(getuserProfile)
router.route('/login').post(login)

export default router