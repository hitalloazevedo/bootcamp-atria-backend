import { Database } from "../entities/repository/implementations/in-memory-database"; 
import { TaskRepository } from "../entities/repository/implementations/task.repository"; 
import { CreateTaskController } from "../controller/create-task.controller"; 
import { CreateTaskUseCase } from "../use_case/Use_case_Task/create-task.use-case"; 

export function MakeCreateTaskController() {

    const db = Database.getInstance();
    const taskRepository = new TaskRepository(db);
    const createTaskUseCase = new CreateTaskUseCase(taskRepository);
    const createTask = new CreateTaskController(createTaskUseCase);

    return createTask;
}