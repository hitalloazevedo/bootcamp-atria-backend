import express from 'express'
import { RegisterUserController } from '../controller/auth/RegisterUserController'
import { LoginUserController } from '../controller/auth/LoginUserController'
import { UpdateTaskController } from '../controller/task/UpdateTaskController'
import { CreateTaskController } from '../controller/task/CreateTaskController'
import { DeleteTaskController } from '../controller/task/DeleteTaskController'
import { ListTasksControler } from '../controller/task/ListTasksController'

const router = express.Router()

//cadastro
router.post('/auth/register', (req, res) => {
    
    RegisterUserController.handle(req, res)

    return res.status(200)
})


//login
router.post("/auth/login", (req, res) => {

    // import middleware auth

    //handles staticos
    const user = LoginUserController.handle(req, res)

    return res.status(user.status).json(user.token)
})


// listar tarefas
router.get('/tasks', (req,res) => {

     // import middleware auth

    const tasks = ListTasksControler.handle(req, res)

    return res.status(tasks.status).json(tasks)
})


// criar tarefa
router.post('/tasks', (req,res) => {

    // import middleware auth

    const task = CreateTaskController.handle(req, res)

    return res.status(task.status)
    //return res.status(task.status).json(tasks)

})


// atualizar tarefas
router.put('/tasks/:id', (req,res) => {

    // import middleware auth

    const task = UpdateTaskController.handle(req, res)

    return res.status(task.status).json(task)
})


// excluir tarefas
router.delete('/tasks/:id', (req,res) => {

    // import middleware auth

    const task = DeleteTaskController.handle(req, res)

    return res.status(task.status)
})


export default router