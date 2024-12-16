import { Request, Response } from "express";

export class PlatoController {
    getPlatos(req: Request, res: Response) {
        res.status(200).json({
            plato: "Listado de Platos",
        });
    }
} 