import { Body, Controller,Delete,Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { UpdateTaskDto, createTaskDto } from './task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService:TasksService){}
//listar
    @Get()
getAllTask(){
return this.tasksService.getAllTask()
}

@Post()
// createTask(@Body()newTask:any){
//     console.log(newTask);
//     return 'guardando'            verificar si esta enviando los datos 
//agregar
create(@Body()newTasks:createTaskDto){
  
    return this.tasksService.createTask(newTasks.title,newTasks.description);
}
//Eliminar
@Delete(':id')
deleteTask(@Param('id')id:string){
    this.tasksService.deleteTask(id)

}
//Editar
@Patch(":id")
updateTask(@Param('id')id:string,@Body()updateFields:UpdateTaskDto){

   return this.tasksService.updateTask(id,updateFields)
}
}
