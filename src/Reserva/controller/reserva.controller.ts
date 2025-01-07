import { Request, Response } from "express";
import { ReservaService } from "../service/reserva.service";
import { ReservaDTO } from "../dto/reserva.dto";

export class ReservaController {
    private reservaService: ReservaService;

    constructor() {
        this.reservaService = new ReservaService();
    }

    // Obtener todas las reservas
    async getReservas(req: Request, res: Response) {
        try {
            const reservas = await this.reservaService.findAllReservas();
            res.status(200).json(reservas);
        } catch (error: any) {
            console.error('Error en getReservas:', error);
            res.status(500).json({ message: "Error al obtener reservas", error: error.message });
        }
    }

    // Obtener una reserva por ID
    async getReservaById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const reserva = await this.reservaService.findReservaById(id);
            if (reserva) {
                res.status(200).json(reserva);
            } else {
                res.status(404).json({ message: "Reserva no encontrada" });
            }
        } catch (error) {
            console.error('Error en getReservaById:', error);
            res.status(500).json({ message: "Error al obtener la reserva" });
        }
    }

    // Crear nueva reserva
    async createReserva(req: Request, res: Response) {
        const reservaData: ReservaDTO = req.body;
        try {
            const newReserva = await this.reservaService.createReserva(reservaData);
            res.status(201).json(newReserva);
        } catch (error) {
            console.error('Error en createReserva:', error);
            res.status(500).json({ message: "Error al crear la reserva" });
        }
    }

    // Actualizar una reserva
    async updateReserva(req: Request, res: Response) {
        const { id } = req.params;
        const reservaData: ReservaDTO = req.body;
        try {
            const updatedReserva = await this.reservaService.updateReserva(id, reservaData);
            if (updatedReserva) {
                res.status(200).json(updatedReserva);
            } else {
                res.status(404).json({ message: "Reserva no encontrada" });
            }
        } catch (error) {
            console.error('Error en updateReserva:', error);
            res.status(500).json({ message: "Error al actualizar la reserva" });
        }
    }

    // Eliminar una reserva
    async deleteReserva(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const result = await this.reservaService.deleteReserva(id);
            if (result && result.affected && result.affected > 0) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: "Reserva no encontrada" });
            }
        } catch (error) {
            console.error('Error en deleteReserva:', error);
            res.status(500).json({ message: "Error al eliminar la reserva" });
        }
    }
}
