import { Database } from "../repository/implementations/in-memory-database"; 
import { UserRepository } from "../repository/implementations/user.repository"
import { CreatUserController } from "../Controller/create-user.controller"; 
import { RegisterUserUseCase } from "../use_case/Use_case_auth/Register";

export function MakeCreatUserController() {
    
    const db = Database.getInstance();
    const userRepository = new UserRepository(db);
    const createUserUseCase = new RegisterUserUseCase(userRepository);
    const createUser = new CreatUserController(createUserUseCase);
    
    return createUser;
}
