import { IsString ,IsNotEmpty,MinLength,IsOptional,IsIn} from "class-validator";
import { TaskStatus } from "./tasks.entity";

export class createTaskDto{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title:string
    @IsString()
    description:string
}

export class UpdateTaskDto{
    id?:string
    @IsString()
    @IsOptional()
    title?:string
    @IsString()
    @IsOptional()
    description?:string
    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.PENDING,TaskStatus.IN_PROGRESS,TaskStatus.DONE])
    status?:TaskStatus
}