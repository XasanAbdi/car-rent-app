import express from 'express'
import { carsUpdate, createcars, deleteCars, getCars } from '../controllers/carControllers.js'


const router =express.Router()

router.route('/').post(createcars).get(getCars)
router.route('/:id').put(carsUpdate).delete(deleteCars)

export default router