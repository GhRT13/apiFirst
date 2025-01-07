import { Router } from "express";
import { ReservaController } from "./controller/reserva.controller";

export class ReservaRouter {
    public router: Router; // Define la propiedad router
    private controller: ReservaController; // Define la propiedad controller

    constructor() {
        this.router = Router(); // Inicializa el router
        this.controller = new ReservaController(); // Inicializa el controlador
        this.routes(); // Llama al método para definir las rutas
    }

    routes(): void {
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
