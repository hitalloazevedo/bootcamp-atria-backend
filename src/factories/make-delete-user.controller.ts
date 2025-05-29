import { Database } from "../repository/implementations/in-memory-database";
import { UserRepository } from "../repository/implementations/user.repository";
import { DeleteUserUseCase } from "../use-cases/delete-user.use-case";
import { DeleteUserController } from "../Controller/delete-user.controller";

export function MakeDeletUserCOntroller() {

    const db = Database.getInstance(); //singleton de banco de dados, o sistema todo utiliza o mesmo banco de dados
    const userReposityory = new UserRepository(db);
    const deletUserUseCase = new DeleteUserUseCase(userReposityory);
    const deletUserController = new DeleteUserController(deletUserUseCase);

    return deletUserController;
}