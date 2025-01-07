import { BaseEntity, DeleteResult, UpdateResult } from "typeorm";
import { EstudianteEntity } from "../entity/estudiante.entity";
import { EstudianteDTO } from "../dto/estudiante.dto";
import { BaseService } from "../../config/base.service";
import { UsuarioEntity } from "../../usuario/entity/usuario.entity";

export class EstudianteService extends BaseService<EstudianteEntity & BaseEntity> {
    constructor() {
        super(EstudianteEntity);
    }

    // Servicio para obtener todos los estudiantes
    async findAllEstudiantes(): Promise<EstudianteEntity[]> {
        return (await this.execRepository).find({ relations: ["usuario"] });
    }

    // Servicio para obtener un estudiante según id
    async findEstudianteById(id: string): Promise<EstudianteEntity | null> {
        return (await this.execRepository).findOne({ where: { id }, relations: ["usuario"] });
    }

    // Servicio para crear un estudiante
    async createEstudiante(body: EstudianteDTO): Promise<EstudianteEntity> {
        const repository = await this.execRepository;

        // Verificar si el usuario existe
        const usuario = await repository.manager.findOne(UsuarioEntity, { where: { id: body.id_usuario } });
        if (!usuario) {
            throw new Error("El usuario no existe"); // Manejo de error si el usuario no se encuentra
        }

        // Crear el estudiante y asociarlo al usuario
        const estudiante = new EstudianteEntity();
        estudiante.id_usuario = body.id_usuario; // Asocia el ID del usuario
        estudiante.carrera = body.carrera;
        estudiante.anio = body.anio;
        estudiante.becado = body.becado;
        estudiante.cuarto = body.cuarto;

        return repository.save(estudiante); // Guarda el estudiante en la base de datos
    }

    // Eliminar un estudiante
    async deleteEstudiante(id: string): Promise<DeleteResult> {
        return (await this.execRepository).delete({ id });
    }

    // Actualizar un estudiante
    async updateEstudiante(id: string, infoUpdate: EstudianteDTO): Promise<UpdateResult> {
        return (await this.execRepository).update(id, infoUpdate);
    }
}
