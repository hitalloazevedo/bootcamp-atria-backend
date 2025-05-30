import { Database } from "../entities/repository/implementations/in-memory-database"; 
import { TaskRepository } from "../entities/repository/implementations/task.repository"; 
import { DeletTaskController } from "../Controller/delete-task.controller"; 
import { DeleteTaskUseCase } from "../use_case/Use_case_Task/delete-task.use-case"; 

export function MakeDeleteTaskController() {

    const db = Database.getInstance();
    const taskRepository = new TaskRepository(db);
    const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);
    const deleteTask = new DeletTaskController(deleteTaskUseCase);

    return deleteTask;
}