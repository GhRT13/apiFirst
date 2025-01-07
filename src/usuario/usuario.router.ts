import { Router } from "express";
import { UsuarioController } from "./controller/usuario.controller";

export class UsuarioRouter {
    public router: Router; // Define la propiedad router
    private controller: UsuarioController; // Define la propiedad controller

    constructor() {
        this.router = Router(); // Inicializa el router
        this.controller = new UsuarioController(); // Inicializa el controlador
        this.routes(); // Llama al método para definir las rutas
    }

    routes(): void {
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
