import { Task } from "../../Task";
import { ITaskRepository } from "../task-repository.interface";
import { Database } from "./in-memory-database";


export class TaskRepository implements ITaskRepository {

    private db: Database;

     constructor(dbInstance: Database) {
        this.db = dbInstance;
    }
    async save(task: Task): Promise<void> {
       this.db.createTask(task);
    }
    async delete(taskId: number): Promise<void> {
        this.db.deleteTask(taskId);
    }
    async getAll(userID: number): Promise<Array<Task>> {
        return this.db.getAllTasks(userID);
    }
   
    async update(task: Task, taskID: number): Promise<void> {
        this.db.uptdateTask(task, taskID);
    }


}