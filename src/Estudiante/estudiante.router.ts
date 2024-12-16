import { EstudianteController } from "./controller/estudiante.controller";
import { BaseRouter } from "../shared/routers/router";

export class EstudianteRouter extends BaseRouter<EstudianteController> {
    constructor() {
        super(EstudianteController);
    }

    routes(): void {
        this.router.get('/estudiante', (req, res) => this.controller.getEstudiantes(req, res));
    }
} 