"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaRouter = void 0;
const express_1 = require("express");
const area_controller_1 = require("./controller/area.controller");
class AreaRouter {
    constructor() {
        this.router = (0, express_1.Router)(); // Inicializa el router
        this.controller = new area_controller_1.AreaController(); // Inicializa el controlador
        this.routes(); // Llama al método para definir las rutas
    }
    routes() {
        // Definir las rutas
        this.router.get('/areas', (req, res) => this.controller.getAreas(req, res));
        // Obtener un área por ID
        this.router.get('/area/:id', (req, res) => this.controller.getAreaById(req, res));
        // Crear nueva área
        this.router.post('/area/createArea', (req, res) => this.controller.createArea(req, res));
        // Modificar un área
        this.router.put('/area/updateArea/:id', (req, res) => this.controller.updateArea(req, res));
        // Eliminar un área
        this.router.delete('/area/deleteArea/:id', (req, res) => this.controller.deleteArea(req, res));
    }
}
exports.AreaRouter = AreaRouter;
