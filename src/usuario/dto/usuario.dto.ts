import { IsNotEmpty, IsString, IsEmail } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

export class UsuarioDTO extends BaseDTO {
    @IsNotEmpty()
    @IsString()
    usuario!: string;

    @IsNotEmpty()
    @IsString()
    contrasena!: string;

    @IsNotEmpty()
    @IsString()
    nombre!: string;

    @IsNotEmpty()
    @IsString()
    apellido!: string;

    @IsNotEmpty()
    @IsString()
    rol!: string;

    id_area?: string;
}