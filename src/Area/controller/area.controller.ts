import { Request, Response } from "express";

export class AreaController {
    getAreas(req: Request, res: Response) {
        res.status(200).json({
            area: "Listado de Areas",
        });
    }
} 