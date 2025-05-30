export class Task {
    public static index = 0;
    private id: number;
    private userId: number;
    private title: string;
    private description: string;
    private status: string;
    private createdAt: string;

    constructor(userId: number, title: string,description: string,status: string,createdAt: string) {
        this.id = ++Task.index;
        this.userId = userId;
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
     
    }

    public getId(){
        return this.id;
    }

    public setId(id:number){
        this.id = id;
    }

    public getUserID(){
        return this.userId;
    }

    }

