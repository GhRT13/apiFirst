"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrabajadorRouter = void 0;
const express_1 = require("express");
const trabajador_controller_1 = require("./controller/trabajador.controller");
class TrabajadorRouter {
    constructor() {
        this.router = (0, express_1.Router)(); // Inicializa el router
        this.controller = new trabajador_controller_1.TrabajadorController(); // Inicializa el controlador
        this.routes(); // Llama al método para definir las rutas
    }
    routes() {
        // Definir las rutas
        this.router.get('/trabajadores', (req, res) => this.controller.getTrabajadores(req, res));
        // Obtener un trabajador por ID
        this.router.get('/trabajador/:id', (req, res) => this.controller.getTrabajadorById(req, res));
        // Crear nuevo trabajador
        this.router.post('/trabajador/createTrabajador', (req, res) => this.controller.createTrabajador(req, res));
        // Modificar un trabajador
        this.router.put('/trabajador/updateTrabajador/:id', (req, res) => this.controller.updateTrabajador(req, res));
        // Eliminar un trabajador
        this.router.delete('/trabajador/deleteTrabajador/:id', (req, res) => this.controller.deleteTrabajador(req, res));
    }
}
exports.TrabajadorRouter = TrabajadorRouter;
