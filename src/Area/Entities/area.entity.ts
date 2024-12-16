import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tabla_area')
export class Area {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ name: 'nombrearea', type: 'varchar', length: 255 })
    nombrearea!: string;
}
