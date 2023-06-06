import express from 'express'
import { carsUpdate, createcars, deleteCars } from '../controllers/carControllers.js'


const router =express.Router()

router.route('/').post(createcars)
router.route('/:id').put(carsUpdate).delete(deleteCars)

export default router