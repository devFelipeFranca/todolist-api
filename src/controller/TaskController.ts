import { Request, Response } from 'express';
import { Tasks } from '../entity/Tasks';
import { getRepository } from 'typeorm';

export const getTasks = async (req: Request, res: Response) => {
  const taskList = await getRepository(Tasks).find();
  return res.status(200).json(taskList);
};

export const saveTask = async (req: Request, res: Response) => {
  const task = await getRepository(Tasks).save(req.body);
  return res.status(201).json(task);
};

export const getTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await getRepository(Tasks).findOne(id);
  if (!task) return res.status(404).json({ message: 'Task not found' });
  return res.status(200).json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  const task = await getRepository(Tasks).update(id, req.body);

  if (task.affected === 1) {
    const taskUpdated = await getRepository(Tasks).findOne(id);
    return res.status(201).json(taskUpdated);
  }

  return res.status(404).json({ message: 'Task not found' });
};

export const finishTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  const task = await getRepository(Tasks).update(id, {
    finished: true,
  });

  if (task.affected === 1) {
    await getRepository(Tasks).findOne(id);
    return res.status(201).json({ message: 'Task finished' });
  }

  return res.status(404).json({ message: 'Task not found' });
};

export const removeTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  const task = await getRepository(Tasks).delete(id);

  if (task.affected === 1) {
    await getRepository(Tasks).findOne(id);
    return res.status(201).json({ message: 'Task removed' });
  }

  return res.status(404).json({ message: 'Task not found' });
};
