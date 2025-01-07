import { Request, Response } from "express";
import { EstudianteService } from "../service/estudiante.service";
import { EstudianteDTO } from "../dto/estudiante.dto";

export class EstudianteController {
    private estudianteService: EstudianteService;

    constructor() {
        this.estudianteService = new EstudianteService();
    }

    // Obtener todos los estudiantes
    async getEstudiantes(req: Request, res: Response) {
        try {
            const estudiantes = await this.estudianteService.findAllEstudiantes();
            res.status(200).json(estudiantes);
        } catch (error: any) {
            console.error('Error en getEstudiantes:', error);
            res.status(500).json({ message: "Error al obtener estudiantes", error: error.message });
        }
    }

    // Obtener un estudiante por ID
    async getEstudianteById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const estudiante = await this.estudianteService.findEstudianteById(id);
            if (estudiante) {
                res.status(200).json(estudiante);
            } else {
                res.status(404).json({ message: "Estudiante no encontrado" });
            }
        } catch (error) {
            console.error('Error en getEstudianteById:', error);
            res.status(500).json({ message: "Error al obtener el estudiante" });
        }
    }

    // Crear nuevo estudiante
    async createEstudiante(req: Request, res: Response) {
        const estudianteData: EstudianteDTO = req.body;
        try {
            const newEstudiante = await this.estudianteService.createEstudiante(estudianteData);
            res.status(201).json(newEstudiante);
        } catch (error) {
            console.error('Error en createEstudiante:', error);
            res.status(500).json({ message: "Error al crear el estudiante" });
        }
    }

    // Actualizar un estudiante
    async updateEstudiante(req: Request, res: Response) {
        const { id } = req.params;
        const estudianteData: EstudianteDTO = req.body;
        try {
            const updatedEstudiante = await this.estudianteService.updateEstudiante(id, estudianteData);
            if (updatedEstudiante) {
                res.status(200).json(updatedEstudiante);
            } else {
                res.status(404).json({ message: "Estudiante no encontrado" });
            }
        } catch (error) {
            console.error('Error en updateEstudiante:', error);
            res.status(500).json({ message: "Error al actualizar el estudiante" });
        }
    }

    // Eliminar un estudiante
    async deleteEstudiante(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const result = await this.estudianteService.deleteEstudiante(id);
            if (result && result.affected && result.affected > 0) {
                res.status(204).send(); // Estudiante eliminado
            } else {
                res.status(404).json({ message: "Estudiante no encontrado" });
            }
        } catch (error) {
            console.error('Error en deleteEstudiante:', error);
            res.status(500).json({ message: "Error al eliminar el estudiante" });
        }
    }
}
