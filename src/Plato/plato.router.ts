import { PlatoController } from "./controller/plato.controller";
import { BaseRouter } from "../shared/routers/router";

export class PlatoRouter extends BaseRouter<PlatoController> {
    constructor() {
        super(PlatoController);
    }

    routes(): void {
        this.router.get('/plato', (req, res) => this.controller.getPlatos(req, res));
    }
} 