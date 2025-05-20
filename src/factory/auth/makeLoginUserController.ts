import { LoginUserController } from '../../controllers/auth/LoginUserController';
import { LoginUserUseCase } from '../../usecases/LoginUserUseCase';
import { InMemoryUserRepository } from '../../repositories/InMemoryUserRepository';
import { JWTService } from '../../services/JWTService';

export function makeLoginUserController() {
  const userRepository = new InMemoryUserRepository();
  const jwtService = new JWTService();
  const loginUserUseCase = new LoginUserUseCase(userRepository, jwtService);
  return new LoginUserController(loginUserUseCase);
}