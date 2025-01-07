import { Router } from "express";
import { PlatoController } from "./controller/plato.controller";

export class PlatoRouter {
    public router: Router; // Define la propiedad router
    private controller: PlatoController; // Define la propiedad controller

    constructor() {
        this.router = Router(); // Inicializa el router
        this.controller = new PlatoController(); // Inicializa el controlador
        this.routes(); // Llama al método para definir las rutas
    }

    routes(): void {
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
