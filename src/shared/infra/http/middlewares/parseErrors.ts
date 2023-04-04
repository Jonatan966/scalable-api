/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppError } from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';

export function parseErrors(
  error: Error,
  _: Request,
  response: Response,
  next: NextFunction
) {
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
