import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { UsuarioEntity } from '../../usuario/entity/usuario.entity';
import { MenuEntity } from '../../menu/entity/menu.entity';

@Entity({ name: "tabla_reserva" })
export class ReservaEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ nullable: false })
    fecha!: Date;

    @Column({ nullable: false })
    cantidad!: number;

    @Column({ nullable: false })
    id_usuario!: string;

    @ManyToOne(() => UsuarioEntity, usuario => usuario.reservas)
    @JoinColumn({ name: 'id_usuario' })
    usuario!: UsuarioEntity;

    @Column({ nullable: false })
    id_menu!: string;

    @ManyToOne(() => MenuEntity, menu => menu.reservas)
    @JoinColumn({ name: 'id_menu' })
    menu!: MenuEntity;
}
