import { Router } from "express";
import { MenuPlatoController } from "./controller/menu-plato.controller";

export class MenuPlatoRouter {
    public router: Router; // Define la propiedad router
    private controller: MenuPlatoController; // Define la propiedad controller

    constructor() {
        this.router = Router(); // Inicializa el router
        this.controller = new MenuPlatoController(); // Inicializa el controlador
        this.routes(); // Llama al método para definir las rutas
    }

    routes(): void {
        // Definir las rutas
        this.router.post('/menu-plato', (req, res) => this.controller.createMenuPlato(req, res));
        
        // Eliminar relación entre menú y plato
        this.router.delete('/menu-plato/:id_menu/:id_plato', (req, res) => this.controller.deleteMenuPlato(req, res));
    }
}
