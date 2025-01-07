import { BaseEntity, DeleteResult, UpdateResult } from "typeorm";
import { TrabajadorEntity } from "../entity/trabajador.entity";
import { TrabajadorDTO } from "../dto/trabajador.dto";
import { BaseService } from "../../config/base.service";
import { UsuarioEntity } from "../../usuario/entity/usuario.entity";

export class TrabajadorService extends BaseService<TrabajadorEntity & BaseEntity> {
    constructor() {
        super(TrabajadorEntity);
    }

    // Servicio para obtener todos los trabajadores
    async findAllTrabajadores(): Promise<TrabajadorEntity[]> {
        return (await this.execRepository).find({ relations: ["usuario"] });
    }

    // Servicio para obtener un trabajador según id
    async findTrabajadorById(id: string): Promise<TrabajadorEntity | null> {
        return (await this.execRepository).findOne({ where: { contrato: id }, relations: ["usuario"] });
    }

    // Servicio para crear un trabajador
    async createTrabajador(body: TrabajadorDTO): Promise<TrabajadorEntity> {
        const repository = await this.execRepository;

        // Verificar si el usuario existe
        const usuario = await repository.manager.findOne(UsuarioEntity, { where: { id: body.id_usuario } });
        if (!usuario) {
            throw new Error("El usuario no existe"); // Manejo de error si el usuario no se encuentra
        }

        // Crear el trabajador y asociarlo al usuario
        const trabajador = new TrabajadorEntity();
        trabajador.id_usuario = body.id_usuario; // Asocia el ID del usuario
        return repository.save(trabajador);
    }

    // Eliminar un trabajador
    async deleteTrabajador(id: string): Promise<DeleteResult> {
        return (await this.execRepository).delete({ contrato: id });
    }

    // Actualizar un trabajador
    async updateTrabajador(id: string, infoUpdate: TrabajadorDTO): Promise<UpdateResult> {
        return (await this.execRepository).update(id, infoUpdate);
    }
}
