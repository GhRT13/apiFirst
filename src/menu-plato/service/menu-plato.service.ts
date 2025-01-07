import { BaseEntity, DeleteResult } from "typeorm";
import { MenuPlatoEntity } from "../entity/menu-plato.entity";
import { MenuPlatoDTO } from "../dto/menu-plato.dto";
import { BaseService } from "../../config/base.service";

export class MenuPlatoService extends BaseService<MenuPlatoEntity & BaseEntity  > {
    constructor() {
        super(MenuPlatoEntity);
    }

    // Servicio para crear una relación entre menú y plato
    async createMenuPlato(body: MenuPlatoDTO): Promise<MenuPlatoEntity> {
        return (await this.execRepository).save(body);
    }

    // Eliminar una relación entre menú y plato
    async deleteMenuPlato(id_menu: string, id_plato: string): Promise<DeleteResult> {
        return (await this.execRepository).delete({ id_menu, id_plato });
    }
}
