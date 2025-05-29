import { Request, Response } from 'express';
import { UpdateTaskUseCase } from '../../usecases/UpdateTaskUseCase';

export class UpdateTaskController {
  constructor(private updateTaskUseCase: UpdateTaskUseCase) {}

  async handle(req: Request, res: Response) {
    const taskid = req.params;
    const data = req.body;
    const userId = req.userId;
    try {
      const task = await this.updateTaskUseCase.execute(userId, taskid, data);
      return res.status(200).json(task);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}