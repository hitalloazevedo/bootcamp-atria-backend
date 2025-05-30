import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { authConfig } from "../config/auth";

declare module "express-serve-static-core" {
    interface Request {
        userId?: string;
    }
}

interface TokenPayload {
    sub: string;
}

export function ensureAuthenticated(
    req: Request, 
    res: Response, 
    next: NextFunction
): void { 

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401).json({ error: "Token missing" });
        return;  
    }

    const [, token] = authHeader.split(" ");

    try {
        const decoded = jwt.verify(token, authConfig.secret) as TokenPayload;
        req.userId = decoded.sub;

        next();  
    } catch {
        res.status(401).json({ error: "Invalid token" });
        return; 
    }
}

declare module "express-serve-static-core" {
    interface Request {
        userId?: string;
    }
}

