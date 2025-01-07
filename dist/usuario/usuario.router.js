"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRouter = void 0;
const express_1 = require("express");
const usuario_controller_1 = require("./controller/usuario.controller");
class UsuarioRouter {
    constructor() {
        this.router = (0, express_1.Router)(); // Inicializa el router
        this.controller = new usuario_controller_1.UsuarioController(); // Inicializa el controlador
        this.routes(); // Llama al método para definir las rutas
    }
    routes() {
        // Definir las rutas
        this.router.get('/usuarios', (req, res) => this.controller.getUsuarios(req, res));
        // Obtener un usuario por ID
        this.router.get('/usuario/:id', (req, res) => this.controller.getUsuarioById(req, res));
        // Crear nuevo usuario
        this.router.post('/usuario/createUsuario', (req, res) => this.controller.createUsuario(req, res));
        // Modificar un usuario
        this.router.put('/usuario/updateUsuario/:id', (req, res) => this.controller.updateUsuario(req, res));
        // Eliminar un usuario
        this.router.delete('/usuario/deleteUsuario/:id', (req, res) => this.controller.deleteUsuario(req, res));
    }
}
exports.UsuarioRouter = UsuarioRouter;
