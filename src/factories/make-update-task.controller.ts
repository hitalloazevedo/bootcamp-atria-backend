import { UpdateTaskController } from "../controller/update-task.controller"; 
import { Database } from "../entities/repository/implementations/in-memory-database";
import { TaskRepository } from "../entities/repository/implementations/task.repository"; 
import { UpdateTaskUseCase } from "../use_case/Use_case_Task/update-task.use-case"; 

export function MakeUpdateTaskController() {
    
    const db = Database.getInstance();
    const taskRepository = new TaskRepository(db);
    const updateTaskUseCase = new UpdateTaskUseCase(taskRepository);
    const updateTask = new UpdateTaskController(updateTaskUseCase);

    return updateTask;
}