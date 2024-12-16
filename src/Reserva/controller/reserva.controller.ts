import { Request, Response } from "express";

export class ReservaController {
    getReservas(req: Request, res: Response) {
        res.status(200).json({
            reserva: "Listado de Reservas",
        });
    }
} 