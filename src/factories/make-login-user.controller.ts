import { Database } from "../repository/implementations/in-memory-database"; 
import { UserRepository } from "../repository/implementations/user.repository";
import { LoginUserUseCase } from "../use-cases/login-user.use-case";
import { LoginUserController } from "../Controller/create-user-login.controller";

export function MakeCreatLoginController(){
 const db = Database.getInstance();

 const repo = new UserRepository (db);

 const usecase = new LoginUserUseCase(repo);

 const contoller = new LoginUserController(usecase);

 return contoller;


}