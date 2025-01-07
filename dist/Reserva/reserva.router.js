"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservaRouter = void 0;
const express_1 = require("express");
const reserva_controller_1 = require("./controller/reserva.controller");
class ReservaRouter {
    constructor() {
        this.router = (0, express_1.Router)(); // Inicializa el router
        this.controller = new reserva_controller_1.ReservaController(); // Inicializa el controlador
        this.routes(); // Llama al método para definir las rutas
    }
    routes() {
        // Definir las rutas
        this.router.get('/reservas', (req, res) => this.controller.getReservas(req, res));
        // Obtener una reserva por ID
        this.router.get('/reserva/:id', (req, res) => this.controller.getReservaById(req, res));
        // Crear nueva reserva
        this.router.post('/reserva/createReserva', (req, res) => this.controller.createReserva(req, res));
        // Modificar una reserva
        this.router.put('/reserva/updateReserva/:id', (req, res) => this.controller.updateReserva(req, res));
        // Eliminar una reserva
        this.router.delete('/reserva/deleteReserva/:id', (req, res) => this.controller.deleteReserva(req, res));
    }
}
exports.ReservaRouter = ReservaRouter;
