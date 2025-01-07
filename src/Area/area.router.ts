import { Router } from "express";
import { AreaController } from "./controller/area.controller";

export class AreaRouter {
    public router: Router; // Define la propiedad router
    private controller: AreaController; // Define la propiedad controller

    constructor() {
        this.router = Router(); // Inicializa el router
        this.controller = new AreaController(); // Inicializa el controlador
        this.routes(); // Llama al método para definir las rutas
    }

    routes(): void {
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