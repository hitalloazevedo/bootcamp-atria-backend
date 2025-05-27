export class User{
  private static index = 1;
  public readonly id: number;
  public name: string;
  public email: string;
  private password: string; 

  constructor(name: string, email: string, password: string) {
    this.id = User.index++;
    this.name = name;
    this.email = email;
    this.password = password;
  }


  public checkPassword(password: string): boolean {
    return this.password === password;
  }

  public getUserData() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
    };
  }

}

