import bcrypt from "bcryptjs";
import jwt, { SignOptions } from "jsonwebtoken";
import { IUserRepository } from "../../entities/repository/user-repository.interface"; 
import { authConfig } from "../../config/auth";

export class LoginUserUseCase {
    constructor(private repo: IUserRepository) {}

    async execute({ email, password }: { email: string; password: string }) {
        const users = await this.repo.getAll();
        const user = users.find(u => u.getEmail() === email);

        if (!user) throw new Error("User not found");

        const passwordMatch = await bcrypt.compare(password, user.getPassword());

        if (!passwordMatch) throw new Error("Incorrect password");

        const options: SignOptions = {
            subject: String(user.getId()),
            expiresIn: authConfig.expiresIn
        };

        const token = jwt.sign({}, authConfig.secret, options);

        return token;
    }
}
