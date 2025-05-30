import { Request, Response } from "express";
import { CreateTaskUseCase } from "../use_case/Use_case_Task/create-task.use-case"; 

export class CreateTaskController {
    constructor(private usecase: CreateTaskUseCase) { }

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