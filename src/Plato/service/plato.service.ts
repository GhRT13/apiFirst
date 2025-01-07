import { DeleteResult, UpdateResult } from "typeorm";
import { BaseEntity } from "typeorm";
import { PlatoEntity } from "../entity/plato.entity";
import { PlatoDTO } from "../dto/plato.dto";
import { BaseService } from "../../config/base.service";

export class PlatoService extends BaseService<PlatoEntity & BaseEntity> {  
    constructor(){
        super(PlatoEntity);
    }

    async findAllPlatos(): Promise<PlatoEntity[]> {
        const repository = await this.execRepository;
        return repository.find();
    }

    async findPlatoById(id: string): Promise<PlatoEntity | null> {
        const repository = await this.execRepository;
        return repository.findOneBy({ id });
    }

    async createPlato(body: PlatoDTO): Promise<PlatoEntity> {
        const repository = await this.execRepository;
        return repository.save(body);
    }

    async deletePlato(id: string): Promise<DeleteResult> {
        const repository = await this.execRepository;
        return repository.delete({ id });
    }

    async updatePlato(id: string, infoUpdate: PlatoDTO): Promise<PlatoEntity | null> {
        const repository = await this.execRepository;
        const plato = await repository.findOneBy({ id });
        
        if (!plato) {
            return null;
        }
        
        repository.merge(plato, infoUpdate);
        return repository.save(plato);
    }
}
