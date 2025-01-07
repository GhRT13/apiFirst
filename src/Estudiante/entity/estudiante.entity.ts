import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { UsuarioEntity } from '../../usuario/entity/usuario.entity';

@Entity({ name: "tabla_estudiante" })
export class EstudianteEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string; // Cambiado a UUID

    @Column({ type: 'uuid', nullable: false })
    id_usuario!: string; // Cambiado a UUID

    @Column({ type: "varchar", length: 255, nullable: false })
    carrera!: string; // Carrera del estudiante

    @Column({ type: "int", nullable: false })
    anio!: number; // Año de estudio

    @Column({ type: "boolean", nullable: false })
    becado!: boolean; // Indica si el estudiante tiene beca

    @Column({ type: "int", nullable: false })
    cuarto!: number; // Cuarto en el que reside

    @OneToOne(() => UsuarioEntity)
    @JoinColumn({ name: 'id_usuario' })
    usuario!: UsuarioEntity; // Relación uno a uno con UsuarioEntity
}
