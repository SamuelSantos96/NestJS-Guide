import { TasksService } from './tasks.service';
import { Task } from './task.model';
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getAllTasks(): Task[];
    createTask(title: string, description: string): Task;
}
