"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudianteController = void 0;
const estudiante_service_1 = require("../service/estudiante.service");
class EstudianteController {
    constructor() {
        this.estudianteService = new estudiante_service_1.EstudianteService();
    }
    // Obtener todos los estudiantes
    getEstudiantes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const estudiantes = yield this.estudianteService.findAllEstudiantes();
                res.status(200).json(estudiantes);
            }
            catch (error) {
                console.error('Error en getEstudiantes:', error);
                res.status(500).json({ message: "Error al obtener estudiantes", error: error.message });
            }
        });
    }
    // Obtener un estudiante por ID
    getEstudianteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const estudiante = yield this.estudianteService.findEstudianteById(id);
                if (estudiante) {
                    res.status(200).json(estudiante);
                }
                else {
                    res.status(404).json({ message: "Estudiante no encontrado" });
                }
            }
            catch (error) {
                console.error('Error en getEstudianteById:', error);
                res.status(500).json({ message: "Error al obtener el estudiante" });
            }
        });
    }
    // Crear nuevo estudiante
    createEstudiante(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const estudianteData = req.body;
            try {
                const newEstudiante = yield this.estudianteService.createEstudiante(estudianteData);
                res.status(201).json(newEstudiante);
            }
            catch (error) {
                console.error('Error en createEstudiante:', error);
                res.status(500).json({ message: "Error al crear el estudiante" });
            }
        });
    }
    // Actualizar un estudiante
    updateEstudiante(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const estudianteData = req.body;
            try {
                const updatedEstudiante = yield this.estudianteService.updateEstudiante(id, estudianteData);
                if (updatedEstudiante) {
                    res.status(200).json(updatedEstudiante);
                }
                else {
                    res.status(404).json({ message: "Estudiante no encontrado" });
                }
            }
            catch (error) {
                console.error('Error en updateEstudiante:', error);
                res.status(500).json({ message: "Error al actualizar el estudiante" });
            }
        });
    }
    // Eliminar un estudiante
    deleteEstudiante(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const result = yield this.estudianteService.deleteEstudiante(id);
                if (result && result.affected && result.affected > 0) {
                    res.status(204).send(); // Estudiante eliminado
                }
                else {
                    res.status(404).json({ message: "Estudiante no encontrado" });
                }
            }
            catch (error) {
                console.error('Error en deleteEstudiante:', error);
                res.status(500).json({ message: "Error al eliminar el estudiante" });
            }
        });
    }
}
exports.EstudianteController = EstudianteController;
