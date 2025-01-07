import { IsNotEmpty, IsString, IsNumber, IsOptional } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

export class PlatoDTO extends BaseDTO {
    @IsNotEmpty()
    @IsString()
    nombre!: string;

    @IsNotEmpty()
    @IsNumber()
    precio!: number;

    @IsOptional()
    @IsString()
    descripcion?: string; // Campo opcional
}
