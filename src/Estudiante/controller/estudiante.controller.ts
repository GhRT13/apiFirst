import { Request, Response } from "express";

export class EstudianteController {
    getEstudiantes(req: Request, res: Response) {
        res.status(200).json({
            estudiante: "Listado de Estudiantes",
        });
    }
} 