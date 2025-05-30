import { MakeCreateTaskController } from "../factories/make-create-task.controller";
import { MakeCreatUserController } from "../factories/make-create-user.controller";
import { MakeDeleteTaskController } from "../factories/make-delete-task.controller";
import { MakeGetAllTasksController } from "../factories/make-getall-task.controller";
import { MakeCreateLoginController } from "../factories/make-login-user.controller";
import { MakeUpdateTaskController } from "../factories/make-update-task.controller";

//usuario
export const createUser = MakeCreatUserController()
export const createLogin = MakeCreateLoginController()

//tarefas
export const createTask = MakeCreateTaskController()
export const getTask = MakeGetAllTasksController()
export const updateTask = MakeUpdateTaskController()
export const deleteTask = MakeDeleteTaskController()