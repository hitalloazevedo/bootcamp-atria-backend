import type { Request, Response } from 'express';
import type {ListTasksUseCase} from '../../usecases/task/ListTasksUseCase';

export class ListTaasksControler{
    constructor(private ListTasksUseCase: ListTasksUseCase) {}

    async handle(request: Request, response: Response){
        const userID = request.userID;

        try{
            const tasks = await this.ListTasksUseCase.execute(userID);
            return response.status(200).json(tasks);
        }catch (error) {
            return response.status(400).json({ message: error.message });
        }



    }
}