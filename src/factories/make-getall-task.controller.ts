import { GetAllTasksController } from "../Controller/getall-tasks.controller"; 
import { Database } from "../entities/repository/implementations/in-memory-database";
import { TaskRepository } from "../entities/repository/implementations/task.repository"; 
import { GetAllTaskUseCase } from "../use_case/Use_case_Task/getall-task.use-case"; 

export function MakeGetAllTasksController() {

    const db = Database.getInstance();
    const taskRepository = new TaskRepository(db);
    const getallUseCase = new GetAllTaskUseCase(taskRepository);
    const getTask = new GetAllTasksController(getallUseCase);
    
    return getTask;
}