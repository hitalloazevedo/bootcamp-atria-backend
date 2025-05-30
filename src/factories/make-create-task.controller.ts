import { Database } from "../entities/repository/implementations/in-memory-database"; 
import { TaskRepository } from "../entities/repository/implementations/task.repository"; 
import { CreatTaskController } from "../Controller/create-task.controller"; 
import { CreatTaskUseCase } from "../use_case/Use_case_Task/create-task.use-case"; 

export function MakeCreateTaskController() {

    const db = Database.getInstance();
    const taskRepository = new TaskRepository(db);
    const createTaskUseCase = new CreatTaskUseCase(taskRepository);
    const createTask = new CreatTaskController(createTaskUseCase);

    return createTask;
}