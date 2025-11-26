import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query,UsePipes} from '@nestjs/common';
import {  TasksService } from './tasks.service';
import type { Task } from './tasks.service';
import type { CreateTaskDto } from './dto/create-task.dto';
import type { UpdateTaskDto } from './dto/update-task.dto';

@Controller('/tasks')
export class TasksController {
 

  constructor(private TasksService: TasksService) {
    
  }

  @Get()
  getAllTasks(@Query() query: CreateTaskDto)  {
    console.log(query);
    return this.TasksService.getAllTasks();
  }


   @Get('/:id')
   getTaskById(@Param('id',ParseIntPipe) id: number) : Task | undefined {
    return this.TasksService.getTaskById(id)

   }


  //Post

   @Post()
   createTask(@Body() task: CreateTaskDto){
    console.log(task);
    return  this.TasksService.createTask(task);
  }



  //Put

  @Put()
  updateTask(@Body() task: UpdateTaskDto) {
    return this.TasksService.updateTask(task);
  }

  @Delete('/:id')
  deleteTask(@Param('id',ParseIntPipe) id: number): Task | undefined {
    return this.TasksService.deleteTask(id);
  }

 //patch sivre para modificaciones parciales
  @Patch()
  updateTaskStatus() {
    return this.TasksService.updateTaskStatus();
  }



}
