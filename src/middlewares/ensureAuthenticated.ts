import { Request, Response, NextFunction } from 'express';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv'; // Importe o dotenv
dotenv.config(); // Carregue as variáveis de ambiente

const authConfig = {
    secret: process.env.SECRET_KEY, // variável de ambiente
};

declare module 'express-serve-static-core' {
    interface Request {
        userId?: string;
    }
}

function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
): Response | void {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({ message: 'Token não fornecido' });
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = jwt.verify(token, authConfig.secret as Secret) as JwtPayload;
        const { sub } = decoded;
        request.userId = sub as string;
        return next();
    } catch (err) {
        return response.status(401).json({ message: 'Token inválido' });
    }
}

export default ensureAuthenticated;