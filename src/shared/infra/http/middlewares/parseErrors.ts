/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppError } from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

export function parseErrors(
  error: Error,
  _: Request,
  response: Response,
  next: NextFunction
) {
  if (error instanceof ZodError) {
    return response.status(400).json({
      status: 'validation error',
      issues: error.issues,
    });
  }

  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${error.message}`,
  });
}
