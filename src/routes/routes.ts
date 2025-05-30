import express from 'express'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import { Request, Response, NextFunction } from 'express'
import {createUser, createLogin, getTask, createTask, updateTask, deleteTask} from './dependency'

const router = express.Router()


router.use(((req: Request, res: Response, next: NextFunction) => {
  
  const needsAuth = req.path.startsWith('/tasks') 

  if (needsAuth) {
    return ensureAuthenticated(req, res, next);
  }

  return next();
}) as express.RequestHandler);


//Usuario
router.post('/auth/register', (req, res) => {   
    createUser.handle(req, res)
})

router.post("/auth/login", (req, res) => {
    createLogin.handle(req, res)
})

//tarefas
router.get('/tasks', (req, res) => {
    getTask.handle(req, res)
})

router.post('/tasks', (req, res) => {
    createTask.handle(req, res)
})

router.put('/tasks/:id', (req, res) => {
    updateTask.handle(req, res)
})

router.delete('/tasks/:id', (req, res) => {
    deleteTask.handle(req, res)
})

export default router