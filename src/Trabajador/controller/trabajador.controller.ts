import { Request, Response } from "express";
import { TrabajadorService } from "../service/trabajador.service";
import { TrabajadorDTO } from "../dto/trabajador.dto";

export class TrabajadorController {
    private trabajadorService: TrabajadorService;

    constructor() {
        this.trabajadorService = new TrabajadorService();
    }

    // Obtener todos los trabajadores
    async getTrabajadores(req: Request, res: Response) {
        try {
            const trabajadores = await this.trabajadorService.findAllTrabajadores();
            res.status(200).json(trabajadores);
        } catch (error : any) {
            console.error('Error en getTrabajadores:', error);
            res.status(500).json({ message: "Error al obtener trabajadores", error: error.message });
        }
    }

    // Obtener un trabajador por ID
    async getTrabajadorById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const trabajador = await this.trabajadorService.findTrabajadorById(id);
            if (trabajador) {
                res.status(200).json(trabajador);
            } else {
                res.status(404).json({ message: "Trabajador no encontrado" });
            }
        } catch (error) {
            console.error('Error en getTrabajadorById:', error);
            res.status(500).json({ message: "Error al obtener el trabajador" });
        }
    }

    // Crear nuevo trabajador
    async createTrabajador(req: Request, res: Response) {
        const trabajadorData: TrabajadorDTO = req.body;
        try {
            const newTrabajador = await this.trabajadorService.createTrabajador(trabajadorData);
            res.status(201).json(newTrabajador);
        } catch (error) {
            console.error('Error en createTrabajador:', error);
            res.status(500).json({ message: "Error al crear el trabajador" });
        }
    }

    // Actualizar un trabajador
    async updateTrabajador(req: Request, res: Response) {
        const { id } = req.params;
        const trabajadorData: TrabajadorDTO = req.body;
        try {
            const updatedTrabajador = await this.trabajadorService.updateTrabajador(id, trabajadorData);
            if (updatedTrabajador) {
                res.status(200).json(updatedTrabajador);
            } else {
                res.status(404).json({ message: "Trabajador no encontrado" });
            }
        } catch (error) {
            console.error('Error en updateTrabajador:', error);
            res.status(500).json({ message: "Error al actualizar el trabajador" });
        }
    }

    // Eliminar un trabajador
    async deleteTrabajador(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const result = await this.trabajadorService.deleteTrabajador(id);
            if (result && result.affected && result.affected > 0) {
                res.status(204).send(); // Trabajador eliminado
            } else {
                res.status(404).json({ message: "Trabajador no encontrado" });
            }
        } catch (error) {
            console.error('Error en deleteTrabajador:', error);
            res.status(500).json({ message: "Error al eliminar el trabajador" });
        }
    }
}
