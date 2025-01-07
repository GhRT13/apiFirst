import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { MenuEntity } from '../../menu/entity/menu.entity';
import { PlatoEntity } from '../../plato/entity/plato.entity';
import { BaseEntity } from '../../config/base.entity';

@Entity({ name: "menu_plato" })
export class MenuPlatoEntity extends BaseEntity {
    @PrimaryColumn('uuid')
    id_menu!: string;

    @PrimaryColumn('uuid')
    id_plato!: string;

    @ManyToOne(() => MenuEntity, menu => menu.platos, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_menu' })
    menu!: MenuEntity;

    @ManyToOne(() => PlatoEntity, plato => plato.menus, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_plato' })
    plato!: PlatoEntity;
}
