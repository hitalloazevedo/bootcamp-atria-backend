import express from 'express'
import { RegisterUserController } from '../controller/auth/RegisterUserController'
import { LoginUserController } from '../controller/auth/LoginUserController'

const router = express.Router()

//cadastro
router.post('/auth/register', (req, res) => {
    RegisterUserController.handle(req, res)
})

//login
router.post("/auth/login", (req, res) => {
    const user = LoginUserController.handle(req, res)

    if(!user){
        res.status(404).json({message: "ususario nao encontrado"})
    }

    const token = jwt

    res.status(200).json(token)
})

export default router

