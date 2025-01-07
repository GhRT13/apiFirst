import { BaseEntity, DeleteResult, UpdateResult } from "typeorm";
import { UsuarioDTO } from "../dto/usuario.dto";
import { BaseService } from "../../config/base.service";
import { UsuarioEntity } from "../entity/usuario.entity";

export class UsuarioService extends BaseService<UsuarioEntity & BaseEntity> {
    constructor(){
        super(UsuarioEntity);
    }
	// servicio para obtener todos los usuarios
    async findAllUsuarios():Promise<UsuarioEntity[]> {
        return (await this.execRepository).find();
    }
    // servicio para obtener un usuarios según id
    async findUsuarioById(id: string): Promise<UsuarioEntity | null>     {
        return (await this.execRepository).findOneBy({ id });   
    }
    // servicio para crear un usuario
    async createUsuario(body: UsuarioDTO): Promise<UsuarioEntity>{
        return (await this.execRepository).save(body);
    }

    // eliminar un usuario
    async deleteUsuario(id: string): Promise<DeleteResult>{
        return (await this.execRepository).delete({id});
    }
    // actualizar un usuario
    async updateUsuario(id: string, infoUpdate: UsuarioDTO): Promise<UpdateResult>{
    return (await this.execRepository).update(id, infoUpdate);
    }
}