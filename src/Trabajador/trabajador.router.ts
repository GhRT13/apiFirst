import { Router } from "express";
import { TrabajadorController } from "./controller/trabajador.controller";

export class TrabajadorRouter {
    public router: Router; // Define la propiedad router
    private controller: TrabajadorController; // Define la propiedad controller

    constructor() {
        this.router = Router(); // Inicializa el router
        this.controller = new TrabajadorController(); // Inicializa el controlador
        this.routes(); // Llama al método para definir las rutas
    }

    routes(): void {
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
