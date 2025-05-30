export class User {
    public static index = 0;
    private id: number;
    private name: string;
    private email: string;
    private password: string;

    constructor(name: string, email: string, password: string) {
        User.index++;
        this.id = User.index;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public getId() {
        return this.id;
    }
    public getEmail() {
        return this.email;
    }
    public getPassword() {
        return this.password;
    }
}