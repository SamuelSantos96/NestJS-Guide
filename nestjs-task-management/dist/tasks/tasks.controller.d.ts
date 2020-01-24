import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getAllTasks(): Task[];
    createTask(createTaskDto: CreateTaskDto): Task;
}
