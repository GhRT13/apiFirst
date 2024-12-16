import { Request, Response } from "express";

export class TrabajadorController {
    getTrabajadores(req: Request, res: Response) {
        res.status(200).json({
            trabajador: "Listado de Trabajadores",
        });
    }
} 