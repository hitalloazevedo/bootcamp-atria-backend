import { IPostRepository } from "../repository/task-repository.interface"; // mudar quando tiver o repositorio

export class FindAllTaskUseCase {

    constructor(private repo: IPostRepository) {}

    async execute() {
        const result = await this.repo.findAll();
        console.log("results", result);
        return result;
    }
}
