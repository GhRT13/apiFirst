"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuRouter = void 0;
const express_1 = require("express");
const menu_controller_1 = require("./controller/menu.controller");
class MenuRouter {
    constructor() {
        this.router = (0, express_1.Router)(); // Inicializa el router
        this.controller = new menu_controller_1.MenuController(); // Inicializa el controlador
        this.routes(); // Llama al método para definir las rutas
    }
    routes() {
        // Definir las rutas
        this.router.get('/menus', (req, res) => this.controller.getMenus(req, res));
        // Obtener un menú por ID
        this.router.get('/menu/:id', (req, res) => this.controller.getMenuById(req, res));
        // Crear nuevo menú
        this.router.post('/menu/createMenu', (req, res) => this.controller.createMenu(req, res));
        // Modificar un menú
        this.router.put('/menu/updateMenu/:id', (req, res) => this.controller.updateMenu(req, res));
        // Eliminar un menú
        this.router.delete('/menu/deleteMenu/:id', (req, res) => this.controller.deleteMenu(req, res));
    }
}
exports.MenuRouter = MenuRouter;
