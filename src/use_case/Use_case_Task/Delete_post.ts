import { IPostRepository } from "../repository/task-repository.interface"; // mudar quando tiver o repositorio

export class DeleteTaskUseCase {

    constructor(private repo: IPostRepository) {}

    async execute(id: number) {
        await this.repo.delete(id);
    }
}
