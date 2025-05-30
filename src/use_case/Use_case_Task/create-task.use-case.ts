import { Task } from "../../entities/Task"; 
import { ITaskRepository } from "../../entities/repository/task-repository.interface"; 

export class CreateTaskUseCase{

    constructor(private repo : ITaskRepository){}

    async execute({userId, title,description,status,createdAt}:{userId: number, title: string,description: string,status: string,createdAt: string}){
        const task = new Task(userId, title,description,status,createdAt);
        await this.repo.save(task);

    }


}