import { string, boolean, validate } from 'joi';

const taskSchema = {
    name: string().min(10).required(),
    completed: boolean()
};

export function validateTask(task) { return validate(task, taskSchema); }
