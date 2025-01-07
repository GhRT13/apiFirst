import { DeleteResult, UpdateResult } from "typeorm";
import { BaseEntity } from "typeorm";
import { AreaEntity } from "../entity/area.entity";
import { AreaDTO } from "../dto/area.dto";
import { BaseService } from "../../config/base.service";

export class AreaService extends BaseService<AreaEntity & BaseEntity> {  
    constructor(){
        super(AreaEntity);
    }

    // servicio para obtener todos los usuarios
    async findAllAreas(): Promise<AreaEntity[]> {
        const repository = await this.execRepository;
        return repository.find();
    }

    // servicio para obtener un usuario según id
    async findAreaById(id: string): Promise<AreaEntity | null> {
        const repository = await this.execRepository;
        return repository.findOneBy({ id });   
    }

    // servicio para crear un usuario
    async createArea(body: AreaDTO): Promise<AreaEntity> {
        const repository = await this.execRepository;
        return repository.save(body);
    }

    // eliminar un usuario
    async deleteArea(id: string): Promise<DeleteResult> {
        const repository = await this.execRepository;
        return repository.delete({ id });
    }

    // actualizar un usuario
    async updateArea(id: string, infoUpdate: AreaDTO): Promise<UpdateResult> {
        const repository = await this.execRepository;
        return repository.update(id, infoUpdate);
    }
}