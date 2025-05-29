import { UpdateTaskController } from '../../controller/task/UpdateTaskController';
import { UpdateTaskUseCase } from '../../usecases/CreateTaskUseCase';
import { InMemoryTaskRepository } from '../../repositories/InMemoryTaskRepository';
export function makeUpdateTaskController() {
  const taskRepository = new InMemoryTaskRepository();
  const UptadeTaskUseCase = new UpdateTaskUseCase(taskRepository);
  return new UpdateTaskController(UpdateTaskUseCase);
}
