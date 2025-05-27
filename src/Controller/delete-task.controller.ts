import { Request, Response } from "express";
import { DeleteTaskUseCase } from "../use-cases/delete-task.use-case";

export class DeletTaskController {
    constructor(private usecase: DeleteTaskUseCase) { }

    async handle(request: Request, response: Response) {

        try {
            const { id } = request.params;

            const taskID = Number(id)

            await this.usecase.execute(taskID)

            response.status(200).json({
                message: "Tarefa deletada com sucesso"
            })
        } catch (error) {
            response.status(400).json({
                message: error.message
            })
        }
    }
}