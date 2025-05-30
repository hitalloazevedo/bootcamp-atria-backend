import { Request, Response } from "express";
import { CreateUserUseCase } from "../use_case/Use_case_auth/create-user.use-case"; 

export class CreateUserController {
    constructor(private usecase: CreateUserUseCase) { }

    async handle(request: Request, response: Response) {

        try {
            const data = request.body

            await this.usecase.execute(data)

            response.status(201).json({
                message: "usuario criado com sucesso"
            })
        } catch (error: any) {
            response.status(400).json({
                message: error.message
            })
        }
    }
}