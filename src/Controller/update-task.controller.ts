import { Request, Response } from "express";
import { UpdateTaskUseCase } from "../use_case/Use_case_Task/update-task.use-case"; 

export class UpdateTaskController {
    constructor(private usecase: UpdateTaskUseCase) { }

    async handle(request: Request, response: Response) {
        const { id } = request.params;  // pega o id da task pela URL
        const taskId = Number(id);

        const { title, description, status, createdAt } = request.body;

        const userId = Number(request.userId);  // ✅ pega do req, não do body

        await this.usecase.execute(
            { userId, title, description, status, createdAt },
            taskId
        );

        response.status(200).json({
            message: "Tarefa atualizada com sucesso"
        });
    }
}
