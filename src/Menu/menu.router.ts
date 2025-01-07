import { Router } from "express";
import { MenuController } from "./controller/menu.controller";

export class MenuRouter {
    public router: Router; // Define la propiedad router
    private controller: MenuController; // Define la propiedad controller

    constructor() {
        this.router = Router(); // Inicializa el router
        this.controller = new MenuController(); // Inicializa el controlador
        this.routes(); // Llama al método para definir las rutas
    }

    routes(): void {
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
