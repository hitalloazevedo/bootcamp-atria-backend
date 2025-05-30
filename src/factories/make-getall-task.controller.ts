import { GetAllTasksController } from "../Controller/getall-tasks.controller";
import { Database } from "../repository/implementations/in-memory-database";
import { TaskRepository } from "../repository/implementations/task.repository";
import { FindAllPostUseCase } from "../use_case/Use_case_Task/Find-task";

export function MakeGetAllTasksController() {

    const db = Database.getInstance();
    const taskRepository = new TaskRepository(db);
    const getallUseCase = new FindAllPostUseCase(taskRepository);
    const getTask = new GetAllTasksController(getallUseCase);
    
    return getTask;
}