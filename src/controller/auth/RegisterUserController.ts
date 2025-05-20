import type {Request, Response} from 'express';
import type {RegisterUserCase} from '../usecases/auth/RegisterUserUserCase'; //import generico pois o use case nao foi criado ainda
//a implementaçao esta passivel de mudanças conforme o dessenvolvimento dos use cases.
export class RegisterUserController{
    constructor(private registerUserUseCase: RegisterUserCase){}


    async handle(request: Request, response: Response){
        const data = request.body;

        try {   
            const result = await this.registerUserUseCase.execute(data);
            return response.status(201).json(result);
            
        }  catch (error) {
      return response.status(400).json({ message: error.message });
    }
    }
}


