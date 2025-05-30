import { UpdateTaskController } from "../Controller/update-task.controller";
import { Database } from "../repository/implementations/in-memory-database";
import { TaskRepository } from "../repository/implementations/task.repository";
import { UpdatetaskUseCase } from "../use_case/Use_case_Task/update-task";

export function MakeUpdateTaskController() {
    
    const db = Database.getInstance();
    const taskRepository = new TaskRepository(db);
    const updateTaskUseCase = new UpdatetaskUseCase(taskRepository);
    const updateTask = new UpdateTaskController(updateTaskUseCase);

    return updateTask;
}