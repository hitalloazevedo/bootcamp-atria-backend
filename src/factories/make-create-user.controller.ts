import { Database } from "../entities/repository/implementations/in-memory-database"; 
import { UserRepository } from "../entities/repository/implementations/user.repository"; 
import { CreatUserController } from "../Controller/create-user.controller"; 
import { CreatUserUseCase } from "../use_case/Use_case_auth/create-user.use-case"; 

export function MakeCreatUserController() {
    
    const db = Database.getInstance();
    const userRepository = new UserRepository(db);
    const createUseruseCase = new CreatUserUseCase(userRepository);
    const createUser = new CreatUserController(createUseruseCase);
    
    return createUser;
}
