import { Database } from "../repository/implementations/in-memory-database";
import { TaskRepository } from "../repository/implementations/task.repository";
import { CreateTaskController } from "../Controller/create-task.controller";
import { CreateTaskUseCase } from "../use_case/Use_case_Task/create-task";

export function MakeCreateTaskController() {

    const db = Database.getInstance();
    const taskRepository = new TaskRepository(db);
    const createTaskUseCase = new CreateTaskUseCase(taskRepository);
    const createTask = new CreateTaskController(createTaskUseCase);

    return createTask;
}