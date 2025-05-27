import { Request, response, Response } from "express";
import { CreatTaskUseCase } from "../use-cases/create-task.use-case";

export class CreatTaskController {
    constructor(private usecase: CreatTaskUseCase) { }

    async handle(request: Request, response: Response) {

        try {

           const { title, description, status, createdAt } = request.body;

            const userId = Number(request.userId);  // ✅ Pega do middleware

            await this.usecase.execute({
                userId,  // ✅ passa para o usecase
                title,
                description,
                status,
                createdAt
            });
            response.status(201).json({
                message: "Tarefa criada com sucesso"
            })
        }
        catch (error) {
            response.status(400).json({
                message: "Erro ao criar tarefa",
                error: (error as Error).message
            });
        }
    }
}