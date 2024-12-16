import { TrabajadorController } from "./controller/trabajador.controller";
import { BaseRouter } from "../shared/routers/router";

export class TrabajadorRouter extends BaseRouter<TrabajadorController> {
    constructor() {
        super(TrabajadorController);
    }

    routes(): void {
        this.router.get('/trabajador', (req, res) => this.controller.getTrabajadores(req, res));
    }
} 