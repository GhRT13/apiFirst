"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudianteRouter = void 0;
const express_1 = require("express");
const estudiante_controller_1 = require("./controller/estudiante.controller");
class EstudianteRouter {
    constructor() {
        this.router = (0, express_1.Router)(); // Inicializa el router
        this.controller = new estudiante_controller_1.EstudianteController(); // Inicializa el controlador
        this.routes(); // Llama al método para definir las rutas
    }
    routes() {
        // Definir las rutas
        this.router.get('/estudiantes', (req, res) => this.controller.getEstudiantes(req, res));
        // Obtener un estudiante por ID
        this.router.get('/estudiante/:id', (req, res) => this.controller.getEstudianteById(req, res));
        // Crear nuevo estudiante
        this.router.post('/estudiante/createEstudiante', (req, res) => this.controller.createEstudiante(req, res));
        // Modificar un estudiante
        this.router.put('/estudiante/updateEstudiante/:id', (req, res) => this.controller.updateEstudiante(req, res));
        // Eliminar un estudiante
        this.router.delete('/estudiante/deleteEstudiante/:id', (req, res) => this.controller.deleteEstudiante(req, res));
    }
}
exports.EstudianteRouter = EstudianteRouter;
