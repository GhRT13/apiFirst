import { IsNotEmpty, IsString, IsInt, IsBoolean, IsUUID } from "class-validator";

export class EstudianteDTO {
    @IsUUID()
    id_usuario!: string; // ID del usuario asociado

    @IsNotEmpty()
    @IsString()
    carrera!: string; // Carrera del estudiante

    @IsNotEmpty()
    @IsInt()
    anio!: number; // Año de estudio

    @IsNotEmpty()
    @IsBoolean()
    becado!: boolean; // Indica si el estudiante tiene beca

    @IsNotEmpty()
    @IsInt()
    cuarto!: number; // Cuarto en el que reside
}
