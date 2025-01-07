import { BaseEntity, DeleteResult, UpdateResult } from "typeorm";
import { MenuEntity } from "../entity/menu.entity";
import { MenuDTO } from "../dto/menu.dto";
import { BaseService } from "../../config/base.service";

export class MenuService extends BaseService<MenuEntity & BaseEntity> {
    constructor() {
        super(MenuEntity);
    }

    // Servicio para obtener todos los menús
    async findAllMenus(): Promise<MenuEntity[]> {
        return (await this.execRepository).find();
    }

    // Servicio para obtener un menú según id
    async findMenuById(id: string): Promise<MenuEntity | null> {
        return (await this.execRepository).findOneBy({ id });
    }

    // Servicio para crear un menú
    async createMenu(body: MenuDTO): Promise<MenuEntity> {
        return (await this.execRepository).save(body);
    }

    // Eliminar un menú
    async deleteMenu(id: string): Promise<DeleteResult> {
        return (await this.execRepository).delete({ id });
    }

    // Actualizar un menú
    async updateMenu(id: string, infoUpdate: MenuDTO): Promise<UpdateResult> {
        return (await this.execRepository).update(id, infoUpdate);
    }
}
