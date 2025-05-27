import { Database } from "../repository/implementations/in-memory-database"; 
import { UserRepository } from "../repository/implementations/user.repository"
import { CreatUserUseCase } from "../use-cases/create-user.use-case"; 
import { CreatUserController } from "../Controller/create-user.controller"; 

export function MakeCreatUserController() {
    const db = Database.getInstance();
    const userRepository = new UserRepository(db);
    const creatUserUseCase = new CreatUserUseCase(userRepository);
    const creatUserController = new CreatUserController(creatUserUseCase);
    return creatUserController;
}
