import { Database } from "../entities/repository/implementations/in-memory-database"; 
import { UserRepository } from "../entities/repository/implementations/user.repository"; 
import { LoginUserController } from "../controller/create-user-login.controller"; 
import { LoginUserUseCase } from "../use_case/Use_case_auth/login-user.use-case"; 

export function MakeCreateLoginController(){
    
    const db = Database.getInstance();
    const repo = new UserRepository (db);
    const usecase = new LoginUserUseCase(repo);
    const createLogin = new LoginUserController(usecase);

    return createLogin;
}