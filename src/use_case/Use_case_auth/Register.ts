import { UserRepository } from "../../repositories/UserRepository"; // mudar quando tiver o repositorio
import { User } from "../../entities/User";


export class RegisterUserUseCase {
  constructor(private userRepository: UserRepository) {}

  execute(nome: string, email: string, password: string) {
    const userAlreadyExists = this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("Usuário já cadastrado com este email.");
    }

    const user = new User(nome, email, password);

    this.userRepository.save(user);

    return user;
  }
}
