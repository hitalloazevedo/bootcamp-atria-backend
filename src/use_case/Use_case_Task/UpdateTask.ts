import { IPostRepository } from "../repository/post-repository.interface"; // mudar quando tiver o repositorio

export class UpdatePostUseCase {

    constructor(private repo: IPostRepository) {}

    async execute({
        id,
        title,
        content,
        status,
        authorId
    }: {
        id: number;
        title: string;
        content: string;
        status: string;
        authorId: string;
    }) {
        const post = await this.repo.findById(id);

        if (!post) {
            throw new Error("Post não encontrado.");
        }

        // Verifica se o post pertence ao usuário autenticado
        if (post.authorId !== authorId) {
            throw new Error("Você não tem permissão para editar este post.");
        }

        // Atualiza os campos
        post.title = title;
        post.content = content;
        post.status = status; 

        await this.repo.update(post);
    }
}
