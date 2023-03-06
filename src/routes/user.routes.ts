import { Router } from 'express'
import userController from '@src/controller/user.controller'
const router = Router()

router.post('/create', userController.createUser)
router.get('/get', userController.getUsers)
router.post('/get:id', userController.getOneUser)
router.post('/update:id', userController.updateUser)
router.post('/delete:id', userController.deleteUser)

export default router
