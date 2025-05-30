import { Task } from "../Task";

export interface ITaskRepository{
    save(task : Task): Promise<void>;
    delete(taskId: number): Promise<void>;
    getAll(userID:number): Promise<Task[]>;
    update(task: Task, taskID: number): Promise <void> ;
}