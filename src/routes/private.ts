import express from 'express'
import { ListTaasksControler } from '../controller/task/ListTasksController'
import { CreateTaskController } from '../controller/task/CreateTaskController'
import { UpdateTaskController } from '../controller/task/UpdateTaskController'
import { DeleteTaskController } from '../controller/task/DeleteTaskController'

const router = express.Router()

// listar tarefas
router.get('/tasks', (req,res) => {
    const users = ListTaasksControler.handle()
})

// criar tarefa
router.post('/tasks', (req,res) => {
    CreateTaskController.handle()
})

// atualizar tarefas
router.put('/tasks/:id', (req,res) => {
    UpdateTaskController.handle()
})

// excluir tarefas
router.delete('/tasks/:id', (req,res) => {
    DeleteTaskController.handle()
})

export default router