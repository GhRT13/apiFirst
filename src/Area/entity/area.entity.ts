import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BaseEntity as CustomBaseEntity } from '../../config/base.entity';
import { UsuarioEntity } from '../../usuario/entity/usuario.entity';

@Entity({ name: "tabla_area" })
export class AreaEntity extends CustomBaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ nullable: false })
    nombrearea!: string;

    @OneToMany(() => UsuarioEntity, usuario => usuario.area)
    usuarios?: UsuarioEntity[];
    
} 