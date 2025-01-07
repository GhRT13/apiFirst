import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { UsuarioEntity } from '../../usuario/entity/usuario.entity';

@Entity({ name: "tabla_trabajador" })
export class TrabajadorEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    contrato!: string; // Cambiado a string para UUID

    @Column({ nullable: false })
    id_usuario!: string; 

    @OneToOne(() => UsuarioEntity)
    @JoinColumn({ name: 'id_usuario' })
    usuario!: UsuarioEntity;
}
