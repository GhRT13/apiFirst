import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { MenuPlatoEntity } from '../../menu-plato/entity/menu-plato.entity';

@Entity({ name: "tabla_plato" })
export class PlatoEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ nullable: false })
    nombre!: string;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
    precio!: number;

    @Column({ type: "text", nullable: true })
    descripcion?: string; // Campo opcional

    @OneToMany(() => MenuPlatoEntity, menuPlato => menuPlato.plato)
    menus?: MenuPlatoEntity[];
}
