import type {Request, Response} from 'express';
import { LoginUserUseCase } from '../../usecases/LoginUserUseCase'; //import generico pois o use case nao foi criado ainda
//a implementaçao esta passivel de mudanças conforme o dessenvolvimento dos use cases.
export class LoginUserController{
    constructor(private loginUserUseCase: LoginUserUseCase){}


    async handle(request: Request, response: Response){
        const data = request.body;

        try {   
            const token = await this.loginUserUseCase.execute(data);
            return response.status(200).json(token);
            
        }  catch (error) {
      return response.status(401).json({ message: error.message });
    }
    }
}

