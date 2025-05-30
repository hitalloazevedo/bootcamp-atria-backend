import { Database } from "../repository/implementations/in-memory-database";
import { TaskRepository } from "../repository/implementations/task.repository";
import { DeleteTaskController } from "../Controller/delete-task.controller";
import { DeleteTaskUseCase } from "../use_case/Use_case_Task/delete-task";

export function MakeDeleteTaskController() {

    const db = Database.getInstance();
    const taskRepository = new TaskRepository(db);
    const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);
    const deleteTask = new DeleteTaskController(deleteTaskUseCase);

    return deleteTask;
}