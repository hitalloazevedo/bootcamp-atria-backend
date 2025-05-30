import { UptdateTaskController } from "../Controller/update-task.controller"; 
import { Database } from "../entities/repository/implementations/in-memory-database";
import { TaskRepository } from "../entities/repository/implementations/task.repository"; 
import { UptdateTaskUseCase } from "../use_case/Use_case_Task/update-task.use-case"; 

export function MakeUpdateTaskController() {
    
    const db = Database.getInstance();
    const taskRepository = new TaskRepository(db);
    const updateTaskUseCase = new UptdateTaskUseCase(taskRepository);
    const updateTask = new UptdateTaskController(updateTaskUseCase);

    return updateTask;
}