import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { AreaEntity } from '../../area/entity/area.entity';
import { ReservaEntity } from '../../reserva/entity/reserva.entity';
import { TrabajadorEntity } from '../../trabajador/entity/trabajador.entity';

@Entity({ name: "tabla_usuario" })
export class UsuarioEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ nullable: false, unique: true })
    usuario!: string;

    @Column({ nullable: false })
    contrasena!: string;

    @Column({ nullable: false })
    nombre!: string;

    @Column({ nullable: false })
    apellido!: string;

    @Column({ nullable: false })
    rol!: string;

    @Column({ nullable: true, type: 'uuid' })
    id_area?: string;

    @ManyToOne(() => AreaEntity, area => area.usuarios)
    @JoinColumn({ name: 'id_area' })
    area?: AreaEntity;

    @OneToMany(() => ReservaEntity, reserva => reserva.usuario)
    reservas?: ReservaEntity[];

    /*@OneToOne(()=> TrabajadorEntity, (trabajador) => trabajador.usuario)
    trabajador!: TrabajadorEntity; */
}