import { Database } from "../repository/implementations/in-memory-database"; 
import { UserRepository } from "../repository/implementations/user.repository";
import { LoginUserController } from "../Controller/create-user-login.controller";
import { AuthenticateUserUseCase } from "../use_case/Use_case_auth/Login";

export function MakeCreateLoginController(){
    
    const db = Database.getInstance();
    const repo = new UserRepository (db);
    const usecase = new AuthenticateUserUseCase(repo);
    const createLogin = new LoginUserController(usecase);

    return createLogin;
}