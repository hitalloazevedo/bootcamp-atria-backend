import { ListTasksController } from '../../controllers/task/ListTasksController';
import { ListTasksUseCase } from '../../usecases/ListTasksUseCase';
import { InMemoryTaskRepository } from '../../repositories/InMemoryTaskRepository';

export function makeListTasksController() {
  const taskRepository = new InMemoryTaskRepository();
  const listTasksUseCase = new ListTasksUseCase(taskRepository);
  return new ListTasksController(listTasksUseCase);
}