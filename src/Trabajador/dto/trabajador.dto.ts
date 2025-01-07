import { IsNotEmpty, IsOptional, IsUUID } from "class-validator";

export class TrabajadorDTO {
    @IsNotEmpty()
    @IsUUID()
    id_usuario!: string; // Cambiado a string para UUID

    @IsOptional()
    @IsUUID()
    contrato?: string; // Cambiado a string para UUID
}
