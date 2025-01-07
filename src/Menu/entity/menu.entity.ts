import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { ReservaEntity } from '../../reserva/entity/reserva.entity';
import {MenuPlatoEntity} from '../../menu-plato/entity/menu-plato.entity'
@Entity({ name: "tabla_menu" })
export class MenuEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ nullable: false })
    fecha!: Date;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
    precio!: number;

    @Column({ nullable: false })
    cantidadDisponible!: number;

    @OneToMany(() => ReservaEntity, reserva => reserva.menu)
    reservas?: ReservaEntity[]; // Relación con ReservaEntity

    @OneToMany(() => MenuPlatoEntity, menuPlato => menuPlato.menu)
    platos?: MenuPlatoEntity[];

}
