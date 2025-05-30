import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "../use_case/Use_case_auth/Login";

export class LoginUserController {
    constructor(private usecase: AuthenticateUserUseCase) {}

    async handle(request: Request, response: Response) {
        const {email, password} = request.body;

        try {
            const token = await this.usecase.execute(email, password);  // ✅ Faltava o await aqui
            return response.status(200).json({ token });  // ✅ Agora funciona
        } catch (err: any) {
            return response.status(400).json({ error: err.message });
        }
    }
}
