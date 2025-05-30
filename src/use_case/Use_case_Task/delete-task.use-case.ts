import { ITaskRepository } from "../../entities/repository/task-repository.interface"; 

export class DeleteTaskUseCase{
    constructor(private repo : ITaskRepository){}

    async execute(taskId: number){
        await this.repo.delete(taskId);

    }

}
