import { Router } from "express";
import { EstudianteController } from "./controller/estudiante.controller";

export class EstudianteRouter {
    public router: Router; // Define la propiedad router
    private controller: EstudianteController; // Define la propiedad controller

    constructor() {
        this.router = Router(); // Inicializa el router
        this.controller = new EstudianteController(); // Inicializa el controlador
        this.routes(); // Llama al método para definir las rutas
    }

    routes(): void {
        // Definir las rutas
        this.router.get('/estudiantes', (req, res) => this.controller.getEstudiantes(req, res));
        
        // Obtener un estudiante por ID
        this.router.get('/estudiante/:id', (req, res) => this.controller.getEstudianteById(req, res));

        // Crear nuevo estudiante
        this.router.post('/estudiante/createEstudiante', (req, res) => this.controller.createEstudiante(req, res));

        // Modificar un estudiante
        this.router.put('/estudiante/updateEstudiante/:id', (req, res) => this.controller.updateEstudiante(req, res));

        // Eliminar un estudiante
        this.router.delete('/estudiante/deleteEstudiante/:id', (req, res) => this.controller.deleteEstudiante(req, res));
    }
}
