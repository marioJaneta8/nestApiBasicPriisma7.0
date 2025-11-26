
   
import { IsString,IsOptional, MinLength } from  'class-validator';



export class  CreateTaskDto{
    @IsOptional()
    id?: number;
    @IsString()
    @MinLength(3)
    tittle: string;
    @IsString()
     @MinLength(3)
    description: string;

}