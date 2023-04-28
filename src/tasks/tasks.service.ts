import { Injectable } from '@nestjs/common';
import { Tasks } from './tasks.entity';
import { TaskStatus } from './tasks.entity';
import{ v4}from 'uuid'
import { UpdateTaskDto } from './task.dto';

@Injectable()
export class TasksService {

    private tasks: Tasks[]=[
{
    id:'1',
    title:'first task',
    description:'Some',
    status:TaskStatus.PENDING,
    
}
]
getAllTask(){
    return this.tasks
}
        
    
    createTask(title:string,description:string){
        const task={
            id:v4(),
            title,
            description,
            status:TaskStatus.PENDING,
        }
        this.tasks.push(task)
        return task;

    }
    getTaskById(id:string){
        return this.tasks.find(task=>task.id===id)
    }
    updateTask(id:string, updateFields:UpdateTaskDto){
        const task=this.getTaskById(id)//buscar  el id
        const newTask = Object.assign(task,updateFields)//convinar va editar si no hay nada nuevo lño deja tal como esta 
        this.tasks=this.tasks.map((task)=>(task.id===id ? newTask:task));
        return newTask;
    }
    deleteTask(id:string){
       this.tasks= this.tasks.filter(Task=>Task.id!==id)
    }
}
