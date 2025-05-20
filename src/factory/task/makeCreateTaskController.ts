import { CreateTaskController } from '../../controllers/task/CreateTaskController';
import { CreateTaskUseCase } from '../../usecases/CreateTaskUseCase';
import { InMemoryTaskRepository } from '../../repositories/InMemoryTaskRepository';
export function makeCreateTaskController() {
  const taskRepository = new InMemoryTaskRepository();
  const createTaskUseCase = new CreateTaskUseCase(taskRepository);
  return new CreateTaskController(createTaskUseCase);
}
