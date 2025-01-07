import { IsNotEmpty, IsUUID } from "class-validator";
import { BaseEntity } from "../../config/base.entity";

export class MenuPlatoDTO extends BaseEntity {
    @IsNotEmpty()
    @IsUUID()
    id_menu!: string;

    @IsNotEmpty()
    @IsUUID()
    id_plato!: string;
}
