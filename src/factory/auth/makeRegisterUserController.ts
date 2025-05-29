//importaçoes genéricas, pois elas ainda nao foram implementadas, portanto estao sujeitas a mudanças
import { RegisterUserController } from '../../controllers/auth/RegisterUserController';
import { RegisterUserUseCase } from '../../usecases/RegisterUserUseCase';
import { InMemoryUserRepository } from '../../repositories/InMemoryUserRepository';

export function makeRegisterUserController() {
  const userRepository = new InMemoryUserRepository();
  const registerUserUseCase = new RegisterUserUseCase(userRepository);
  return new RegisterUserController(registerUserUseCase);
}