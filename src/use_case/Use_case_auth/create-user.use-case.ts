import { User } from "../../entities/User"; 
import { IUserRepository } from "../../entities/repository/user-repository.interface";
import bcrypt from "bcryptjs";

export class CreatUserUseCase {
    constructor(private repo: IUserRepository) {}

    async execute({ name, email, password }: { name: string; email: string; password: string }) {
        // ✅ Hashear a senha ANTES de salvar
        const hashedPassword = await bcrypt.hash(password, 8);

        const user = new User(name, email, hashedPassword);

        await this.repo.save(user);
    }
}
