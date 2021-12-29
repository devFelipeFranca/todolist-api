import { Response } from 'express';
import { ErrorType } from './@types';

const error = {
  QueryFailedError: <ErrorType>{ message: 'Invalid Params', code: 400 },
  TaskNotFoundError: <ErrorType>{ message: 'Task not found', code: 404 },
};

export const sendError = (errorName: string, res: Response) => {
  if (error[errorName]) {
    const objError: any = {
      error: {
        message: error[errorName].message,
      },
    };
    return res.status(error[errorName].code).json(objError);
  }
};
