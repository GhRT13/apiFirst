"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudianteController = void 0;
class EstudianteController {
    getEstudiantes(req, res) {
        res.status(200).json({
            estudiante: "Listado de Estudiantes",
        });
    }
}
exports.EstudianteController = EstudianteController;
