"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuPlatoRouter = void 0;
const express_1 = require("express");
const menu_plato_controller_1 = require("./controller/menu-plato.controller");
class MenuPlatoRouter {
    constructor() {
        this.router = (0, express_1.Router)(); // Inicializa el router
        this.controller = new menu_plato_controller_1.MenuPlatoController(); // Inicializa el controlador
        this.routes(); // Llama al método para definir las rutas
    }
    routes() {
        // Definir las rutas
        this.router.post('/menu-plato', (req, res) => this.controller.createMenuPlato(req, res));
        // Eliminar relación entre menú y plato
        this.router.delete('/menu-plato/:id_menu/:id_plato', (req, res) => this.controller.deleteMenuPlato(req, res));
    }
}
exports.MenuPlatoRouter = MenuPlatoRouter;
