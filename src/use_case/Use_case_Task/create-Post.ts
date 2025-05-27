import { Post } from "../../entities/Post";
import { IPostRepository } from "../repository/post-repository.interface"; // mudar quando tiver o repositorio

export class CreatePostUseCase {

    constructor(private repo: IPostRepository) {}

    async execute({ title, content, authorId }: { title: string; content: string; authorId: string }) {
        const post = new Post(title, content, authorId);
        await this.repo.save(post);
    }
}
