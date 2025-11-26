import { Injectable, NotFoundException } from '@nestjs/common';
import type { CreateTaskDto } from './dto/create-task.dto';
import type { UpdateTaskDto } from './dto/update-task.dto';

export interface Task {
  id: number;
  title: string;
  description: string;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  getAllTasks() {
    return this.tasks;
  }

  getTaskById(id: number): Task | undefined {
    const taskFound = this.tasks.find((task) => task.id === id);

    if (!taskFound) {
       throw new NotFoundException(`Task with id ${id} not found`);
      
    }

    return taskFound;
  }

  createTask(task: CreateTaskDto){
    this.tasks.push({
      title: task.tittle,
      description: task.description,
      id: this.tasks.length + 1,
    });
    return task;
  }

  updateTask(task: UpdateTaskDto) {
    return 'actualizando Tarea';
  }

  deleteTask(id: number): Task | undefined {
    const taskFound = this.tasks.filter((task) => task.id === id)[0];
     
           
      
                      

    if (!taskFound) {
       throw new NotFoundException(`Task with id ${id} not found`);
  }

  return taskFound;
  }

  updateTaskStatus() {
    return 'actualizando estado de Tarea';
  }
}
