import type { Request, Response } from 'express';
import type { DeleteTaskUseCase } from '../../usecases/DeleteTaskUseCase';

export class DeleteTaskController {
  constructor(private deleteTaskUseCase: DeleteTaskUseCase) {}

  async handle(request: Request, response: Response) {
    const id  = request.params;
    const userId = request.userId;
    try {
      await this.deleteTaskUseCase.execute({ id, userId });
      return response.status(204).send();
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}