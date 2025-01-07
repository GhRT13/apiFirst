import { Request, Response } from "express";
import { PlatoService } from "../service/plato.service";
import { PlatoDTO } from "../dto/plato.dto";

export class PlatoController {
    private platoService: PlatoService;

    constructor() {
        this.platoService = new PlatoService();
    }

    // Obtener todos los platos
    async getPlatos(req: Request, res: Response) {
        try {
            const platos = await this.platoService.findAllPlatos();
            res.status(200).json(platos);
        } catch (error: any) {
            console.error('Error en getPlatos:', error);
            res.status(500).json({ message: "Error al obtener platos", error: error.message });
        }
    }

    // Obtener un plato por ID
    async getPlatoById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const plato = await this.platoService.findPlatoById(id);
            if (plato) {
                res.status(200).json(plato);
            } else {
                res.status(404).json({ message: "Plato no encontrado" });
            }
        } catch (error) {
            console.error('Error en getPlatoById:', error);
            res.status(500).json({ message: "Error al obtener el plato" });
        }
    }

    // Crear nuevo plato
    async createPlato(req: Request, res: Response) {
        const platoData: PlatoDTO = req.body;
        try {
            const newPlato = await this.platoService.createPlato(platoData);
            res.status(201).json(newPlato);
        } catch (error) {
            console.error('Error en createPlato:', error);
            res.status(500).json({ message: "Error al crear el plato" });
        }
    }

    // Actualizar un plato
    async updatePlato(req: Request, res: Response) {
        const { id } = req.params;
        const platoData: PlatoDTO = req.body;
        try {
            const updatedPlato = await this.platoService.updatePlato(id, platoData);
            if (updatedPlato) {
                res.status(200).json(updatedPlato);
            } else {
                res.status(404).json({ message: "Plato no encontrado" });
            }
        } catch (error) {
            console.error('Error en updatePlato:', error);
            res.status(500).json({ message: "Error al actualizar el plato" });
        }
    }

    // Eliminar un plato
    async deletePlato(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const result = await this.platoService.deletePlato(id);
            if (result && result.affected && result.affected > 0) {
                res.status(204).send(); // Plato eliminado
            } else {
                res.status(404).json({ message: "Plato no encontrado" });
            }
        } catch (error) {
            console.error('Error en deletePlato:', error);
            res.status(500).json({ message: "Error al eliminar el plato" });
        }
    }
}
