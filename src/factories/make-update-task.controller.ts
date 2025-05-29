import { Database } from "../repository/implementations/in-memory-database";
import { TaskRepository } from "../repository/implementations/task.repository";
import { UptdateTaskUseCase } from "../use-cases/update-task.use-case";
import { UptdateTaskController } from "../Controller/update-task.controller";

export function MakeUpdateTaskController() {
    const db = Database.getInstance();
    const taskRepository = new TaskRepository(db);
    const updateTaskUseCase = new UptdateTaskUseCase(taskRepository);
    const updateTaskController = new UptdateTaskController(updateTaskUseCase);
    return updateTaskController;
}