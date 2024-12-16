import { Request, Response } from "express";
import { Area } from "../Entities/area.entity";

export class AreaController {
    getAreas(req: Request, res: Response) {
        res.status(200).json({
            area: "area",
        });
    }
    async getAllAreas(req: Request, res: Response) {
        res.status(200).json({
            area: "Listado de areas",
        });
    }

} 