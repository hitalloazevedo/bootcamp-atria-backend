import { Database } from "../repository/implementations/in-memory-database";
import { TaskRepository } from "../repository/implementations/task.repository";
import { GetAllTaskUseCase } from "../use-cases/getall-task.use-case";
import { GetAllTasksController } from "../Controller/getall-tasks.controller";

export function MakeGetAllTasksController() {
    const db = Database.getInstance();
    const taskRepository = new TaskRepository(db);
    const getallUseCase = new GetAllTaskUseCase(taskRepository);
    const getallTasksController = new GetAllTasksController(getallUseCase);
    return getallTasksController;
}