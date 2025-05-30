export class Post {
    private static index = 1;
    public readonly id: number;
    public title: string;
    public content: string;
    public authorId: string;
    public createdAt: Date;

    constructor(title: string, content: string, authorId: string) {
        this.id = Post.index++;
        this.title = title;
        this.content = content;
        this.authorId = authorId;
        this.createdAt = new Date();
    }
}
