import { BaseEntity, DeleteResult, UpdateResult } from "typeorm";
import { ReservaEntity } from "../entity/reserva.entity";
import { ReservaDTO } from "../dto/reserva.dto";
import { BaseService } from "../../config/base.service";

export class ReservaService extends BaseService<ReservaEntity & BaseEntity > {
    constructor() {
        super(ReservaEntity);
    }

    // Servicio para obtener todas las reservas
    async findAllReservas(): Promise<ReservaEntity[]> {
        return (await this.execRepository).find();
    }

    // Servicio para obtener una reserva según id
    async findReservaById(id: string): Promise<ReservaEntity | null> {
        return (await this.execRepository).findOneBy({ id });
    }

    // Servicio para crear una reserva
    async createReserva(body: ReservaDTO): Promise<ReservaEntity> {
        return (await this.execRepository).save(body);
    }

    // Eliminar una reserva
    async deleteReserva(id: string): Promise<DeleteResult> {
        return (await this.execRepository).delete({ id });
    }

    // Actualizar una reserva
    async updateReserva(id: string, infoUpdate: ReservaDTO): Promise<UpdateResult> {
        return (await this.execRepository).update(id, infoUpdate);
    }
}
