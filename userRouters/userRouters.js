import express from 'express'
import { login, register } from '../controllers/userControllers.js'
const rouuter=express.Router()
rouuter.route('/').post(register)
rouuter.route('/login').post(login)

export default rouuter