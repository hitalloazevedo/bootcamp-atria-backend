import { User } from '../entities/User'; // por algum motivo esta dizendo q n esta achando o caminho do user
import { Post } from '../entities/Post'; // por algum motivo esta dizendo q n esta achando o caminho do post
import { v4 as uuidv4 } from 'uuid';

// ⚠️  ATENÇÃO: Este arquivo inMemoryDB.ts é TEMPORÁRIO.
//     Ele simula um banco de dados em memória para que a aplicação possa funcionar.
//     Quando os Repositories (UserRepository, PostRepository) estiverem prontos,
//     todo o código abaixo DEVERÁ ser movido para as classes de Repository correspondentes
//     e este arquivo DEVERÁ ser removido ou refatorado.
//
//     Os Use Cases também precisarão ser refatorados para usar os Repositories
//     em vez de acessar diretamente as funções deste arquivo.

export const users: User[] = [];
export const posts: Post[] = []; 

// CRUD para Usuários:

// Mover esta função para UserRepository quando estiver pronto.
export function createUser(userData: Omit<User, 'id'>): User {
    const newUser: User = {
        id: uuidv4(),
        ...userData,
    };
    users.push(newUser);
    return newUser;
}

// Mover esta função para UserRepository quando estiver pronto.
export function getUserById(id: string): User | undefined {
    return users.find(user => user.id === id);
}

// Mover esta função para UserRepository quando estiver pronto.
export function getAllUsers(): User[] {
    return users;
}

// Mover esta função para UserRepository quando estiver pronto.
export function updateUser(id: string, userData: Partial<User>): User | undefined {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...userData };
        return users[userIndex];
    }
    return undefined;
}

// Mover esta função para UserRepository quando estiver pronto.
export function deleteUser(id: string): boolean {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        return true;
    }
    return false;
}

// CRUD para Posts (Tarefas):

// Mover esta função para PostRepository quando estiver pronto.
export function createPost(postData: Omit<Post, 'id' | 'authorId' | 'createdAt'>, userId: string): Post {
    const newPost: Post = {
        id: uuidv4(),
        authorId: userId,
        createdAt: new Date(),
        ...postData,
    };
    posts.push(newPost);
    return newPost;
}

// Mover esta função para PostRepository quando estiver pronto.
export function getPostById(id: string): Post | undefined {
    return posts.find(post => post.id === id);
}

// Mover esta função para PostRepository quando estiver pronto.
export function getAllPosts(userId: string): Post[] {
    return posts.filter(post => post.authorId === userId);
}

// Mover esta função para PostRepository quando estiver pronto.
export function updatePost(id: string, postData: Partial<Post>, userId: string): Post | undefined {
    const postIndex = posts.findIndex(post => post.id === id && post.authorId === userId);
    if (postIndex !== -1) {
        posts[postIndex] = { ...posts[postIndex], ...postData };
        return posts[postIndex];
    }
    return undefined;
}

// Mover esta função para PostRepository quando estiver pronto.
export function deletePost(id: string): boolean {
    const postIndex = posts.findIndex(post => post.id === id);
    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
        return true;
    }
    return false;
}

// Funções Auxiliares para Login de Usuário:

// Mover esta função para UserRepository (ou um serviço de autenticação) quando estiver pronto.
export function findUserByEmail(email: string): User | undefined {
    return users.find(user => user.email === email);
}

// Mover esta função para a classe User ou um serviço de autenticação.
export function checkPassword(user: User, password: string): boolean {
    // ⚠️  CUIDADO: Se 'user' for undefined aqui, pode causar erro.
    //     A validação de 'user' deve ser feita antes de chamar esta função.
    //     Idealmente, este método estaria na classe User.
    if (!user) {
        console.warn("Tentativa de verificar senha para usuário nulo/indefinido.");
        return false;
    }
    return user.checkPassword(password); // Assumindo que User tem um método checkPassword
}