import { Database } from "../entities/repository/implementations/in-memory-database"; 
import { UserRepository } from "../entities/repository/implementations/user.repository"; 
import { CreateUserController } from "../controller/create-user.controller"; 
import { CreateUserUseCase } from "../use_case/Use_case_auth/create-user.use-case"; 

export function MakeCreateUserController() {
    
    const db = Database.getInstance();
    const userRepository = new UserRepository(db);
    const createUseruseCase = new CreateUserUseCase(userRepository);
    const createUser = new CreateUserController(createUseruseCase);
    
    return createUser;
}
