import { IsNotEmpty, IsNumber, IsDate, IsUUID } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

export class MenuDTO extends BaseDTO {
    @IsUUID()
    id!: string;

    @IsNotEmpty()
    @IsDate()
    fecha!: Date;

    @IsNotEmpty()
    @IsNumber()
    precio!: number;

    @IsNotEmpty()
    @IsNumber()
    cantidadDisponible!: number;
}
