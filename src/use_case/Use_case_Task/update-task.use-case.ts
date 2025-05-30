import { ITaskRepository } from "../../entities/repository/task-repository.interface";
import { Task } from "../../entities/Task";

export class UpdateTaskUseCase {

    constructor(private repo : ITaskRepository){}

    async execute ({userId, title,description,status,createdAt}:{userId: number, title: string,description: string,status: string,createdAt: string}, taskID : number){
    const newTask = new Task(userId, title,description,status,createdAt);

        await this.repo.update(newTask, taskID);
    }
}