import { DeleteTaskController } from '../../controllers/task/DeleteTaskController';
import { DeleteTaskUseCase } from '../../usecases/DeleteTaskUseCase';
import { InMemoryTaskRepository } from '../../repositories/InMemoryTaskRepository';

export function makeDeleteTaskController() {
  const taskRepository = new InMemoryTaskRepository();
  const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);
  return new DeleteTaskController(deleteTaskUseCase);
}