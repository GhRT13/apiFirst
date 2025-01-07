"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatoRouter = void 0;
const express_1 = require("express");
const plato_controller_1 = require("./controller/plato.controller");
class PlatoRouter {
    constructor() {
        this.router = (0, express_1.Router)(); // Inicializa el router
        this.controller = new plato_controller_1.PlatoController(); // Inicializa el controlador
        this.routes(); // Llama al método para definir las rutas
    }
    routes() {
        // Definir las rutas
        this.router.get('/platos', (req, res) => this.controller.getPlatos(req, res));
        // Obtener un plato por ID
        this.router.get('/plato/:id', (req, res) => this.controller.getPlatoById(req, res));
        // Crear nuevo plato
        this.router.post('/plato/createPlato', (req, res) => this.controller.createPlato(req, res));
        // Modificar un plato
        this.router.put('/plato/updatePlato/:id', (req, res) => this.controller.updatePlato(req, res));
        // Eliminar un plato
        this.router.delete('/plato/deletePlato/:id', (req, res) => this.controller.deletePlato(req, res));
    }
}
exports.PlatoRouter = PlatoRouter;
