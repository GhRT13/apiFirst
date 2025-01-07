import { BaseEntity, EntityTarget, Repository } from "typeorm";
import { ConfigServer } from "./config";
import connectDB from "./ormconfig";

export class BaseService<T extends BaseEntity> extends ConfigServer {
    public execRepository: Promise<Repository<T>>;
    
    constructor(private entity: EntityTarget<T>) {
        super();
        this.execRepository = this.initRepository(this.entity);
    }

    async initRepository(entity: EntityTarget<T>): Promise<Repository<T>> {
        return connectDB.getRepository(entity);
    }
}