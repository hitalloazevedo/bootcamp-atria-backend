import type {Request, Response} from 'express'; 
import type { CreateTaskUseCase } from '../../usecases/CreateTaskUseCase';

export class CreateTaskController {
  constructor(private createTaskUseCase: CreateTaskUseCase) {}

  static async handle(request: Request, response: Response) {
    const data= request.body;
    try {
      const task = await this.createTaskUseCase.execute(data);
      return response.status(201).json(task);
}catch (error) {
      return response.status(400).json({ message: error.message });

}
  }
}