import { Request, Response } from "express";
import { AreaService } from "../service/area.service";
import { AreaDTO } from "../dto/area.dto";

export class AreaController {
    private areaService: AreaService;

    constructor() {
        this.areaService = new AreaService();
    }

    // Obtener todas las áreas
    async getAreas(req: Request, res: Response) {
        try {
            const areas = await this.areaService.findAllAreas();
            res.status(200).json(areas);
        } catch (error: any) {
            console.error('Error en getAreas:', error);
            res.status(500).json({ message: "Error al obtener áreas", error: error.message });
        }
    }

    // Obtener un área por ID
    async getAreaById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const area = await this.areaService.findAreaById(id);
            if (area) {
                res.status(200).json(area);
            } else {
                res.status(404).json({ message: "Área no encontrada" });
            }
        } catch (error) {
            console.error('Error en getAreaById:', error);
            res.status(500).json({ message: "Error al obtener el área" });
        }
    }

    // Crear nueva área
    async createArea(req: Request, res: Response) {
        const areaData: AreaDTO = req.body;
        try {
            const newArea = await this.areaService.createArea(areaData);
            res.status(201).json(newArea);
        } catch (error) {
            console.error('Error en createArea:', error);
            res.status(500).json({ message: "Error al crear el área" });
        }
    }

    // Actualizar un área
    async updateArea(req: Request, res: Response) {
        const { id } = req.params;
        const areaData: AreaDTO = req.body;
        try {
            const updatedArea = await this.areaService.updateArea(id, areaData);
            if (updatedArea) {
                res.status(200).json(updatedArea);
            } else {
                res.status(404).json({ message: "Área no encontrada" });
            }
        } catch (error) {
            console.error('Error en updateArea:', error);
            res.status(500).json({ message: "Error al actualizar el área" });
        }
    }

    // Eliminar un área
    async deleteArea(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const result = await this.areaService.deleteArea(id);
            if (result && result.affected && result.affected > 0) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: "Área no encontrada" });
            }
        } catch (error) {
            console.error('Error en deleteArea:', error);
            res.status(500).json({ message: "Error al eliminar el área" });
        }
    }
}