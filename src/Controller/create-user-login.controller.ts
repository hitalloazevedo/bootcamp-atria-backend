import { Request, Response } from "express";
import { LoginUserUseCase } from "../use_case/Use_case_auth/login-user.use-case"; 

export class LoginUserController {
    constructor(private usecase: LoginUserUseCase) {}

    async handle(request: Request, response: Response) {
        const data = request.body;

        try {
            const token = await this.usecase.execute(data);  // ✅ Faltava o await aqui
            return response.status(200).json({ token });  // ✅ Agora funciona
        } catch (err: any) {
            return response.status(400).json({ error: err.message });
        }
    }
}
