import { IsNotEmpty, IsString, IsDate, IsNumber } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

export class ReservaDTO extends BaseDTO {
    @IsNotEmpty()
    @IsDate()
    fecha!: Date;

    @IsNotEmpty()
    @IsNumber()
    cantidad!: number;

    @IsNotEmpty()
    @IsString()
    id_usuario!: string;

    @IsNotEmpty()
    @IsString()
    id_menu!: string;
}
