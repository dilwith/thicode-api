import {Router} from 'express'
import userController from '../controllers/user.controller.js'
import {validId , validUser} from "../middlewares/global.middlewares.js"

const route = Router()

route.post("/create", userController.create)  
route.get("/", userController.findAll)
route.get("/findById/:id", validId , validUser, userController.findById)
route.patch("/update/:id",validId , validUser, userController.update)

export default route;