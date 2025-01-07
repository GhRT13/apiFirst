import { IsNotEmpty, IsString } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

export class AreaDTO extends BaseDTO {
    @IsNotEmpty()
    @IsString()    
    nombrearea!: string;
}