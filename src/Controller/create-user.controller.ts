import { Request, Response } from "express";
import { RegisterUserUseCase } from "../use_case/Use_case_auth/Register";

export class CreatUserController {
    constructor(private usecase: RegisterUserUseCase) { }

    async handle(request: Request, response: Response) {

        try {
            const {nome, email, password} = request.body


            await this.usecase.execute(nome, email, password)

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