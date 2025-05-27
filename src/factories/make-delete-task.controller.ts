import { Database } from "../repository/implementations/in-memory-database";
import { TaskRepository } from "../repository/implementations/task.repository";
import { DeleteTaskUseCase } from "../use-cases/delete-task.use-case";
import { DeletTaskController } from "../Controller/delete-task.controller";

export function MakeDeletTaskController() {

    const db = Database.getInstance();
    const taskRepository = new TaskRepository(db);
    const deleteTaskUseCasa = new DeleteTaskUseCase(taskRepository);
    const deleteTaskController = new DeletTaskController(deleteTaskUseCasa);
    return deleteTaskController;
}