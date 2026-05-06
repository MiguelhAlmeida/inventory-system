import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/app-error";

export function errorMiddleware(
    error: AppError,
    req: Request,
    res: Response,
    next: NextFunction
) {

    return res.status(error.statusCode || 500).json({
        message: error.message || "Erro interno"
    });
}