import { User } from "../../User"; 
import { Task } from "../../Task";

export class Database {
    private static instance: Database;//singleton

    private Userlist: User[];
    private Tasklist: Task[];

    private constructor() {
        this.Tasklist = [];
        this.Userlist = [];
    }

    public static getInstance(): Database { //:Database deixa claro o tipo de retorno 
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public createTask(task: Task) {
        this.Tasklist.push(task);
        console.log(this.Tasklist);
    }

    public uptdateTask(task: Task, taskID: number) {

       this.Tasklist = this.Tasklist.filter((task) => task.getId() != taskID) // remove a tarefa antes das alteraçoes da lista 
        task.setId(taskID); //seta o mesmo id para a task atualizada
        this.Tasklist.push(task);  
        console.log(this.Tasklist);
        
    }

    public deleteTask(taskID: number) {
        this.Tasklist = this.Tasklist.filter((task) => task.getId() != taskID)
    }


    public getAllTasks(userID: number) {
        const listfiltred = this.Tasklist.filter((task) => task.getUserID() === userID)
        return listfiltred;
    }

    public createUser(user: User) {
        this.Userlist.push(user)
        console.log(this.Userlist);
    }

    public deleteUser(userid: number) {
        this.Userlist = this.Userlist.filter((user) => user.getId() != userid)
    }

    public getAllUsers() {
        return this.Userlist;
    }



}


//testes
//const db = Database.getInstance();
// Criar user
//db.createUser(new User(1, "Gabriel", "gabriel@email.com", "123456"));

// Criar task
//db.createTask(new Task(1, "Estudar Node", "Aprofundar conceitos", "pendente", new Date().toISOString()));

// Criar task
//db.createTask(new Task(2, "Estudar type", "Aprofundar conceitos", "completa", new Date().toISOString()));

// Listar tasks do usuário
//console.log(db.getAllTasks(3));
