import { ITaskRepository } from "../../entities/repository/task-repository.interface"; 
export class GetAllTaskUseCase{

    constructor(private repo : ITaskRepository){}

    async execute(userID : number){
        const result = await this.repo.getAll(userID);
        console.log(result);
        return result;
    }
}