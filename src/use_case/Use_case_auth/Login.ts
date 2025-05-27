import { UserRepository } from "../../repositories/UserRepository"; // mudar quando tiver o repositorio
const jwt = require("jsonwebtoken");

export class AuthenticateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  
  async execute(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email); 

    if (!user) {
      throw new Error("Usuário não encontrado.");
    }

    const passwordMatch = user.checkPassword(password);

    if (!passwordMatch) {
      throw new Error("Senha incorreta.");
    }

    const token = jwt.sign(
      { userId: user.id },
      "AtriaTOKEN",
      { expiresIn: "1h" }
    );

    return {
      token,
      user: {
        id: user.id,
        nome: user.name, 
        email: user.email
      }
    };
  }
}
