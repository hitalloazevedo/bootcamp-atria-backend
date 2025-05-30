import { Request, Response } from "express";
import { FindAllPostUseCase } from "../use_case/Use_case_Task/Find-task";

export class GetAllTasksController {
    constructor(private usecase: FindAllPostUseCase) { }

    async handle(request: Request, response: Response) {
        try {
            const { id } = request.params;

              const userID = Number(request.userId);  // ✅ Correção → pega do request.userId

            const tasks = await this.usecase.execute(userID);

            response.status(200).json({
                message: "Tarefas listadas com sucesso",
                data: tasks

            })
        } catch (error: any) {
            response.status(500).json({
                message: "Erro ao listar tarefas",
                error: error.message
            })

        }
    }
}