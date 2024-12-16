import { ReservaController } from "./controller/reserva.controller";
import { BaseRouter } from "../shared/routers/router";

export class ReservaRouter extends BaseRouter<ReservaController> {
    constructor() {
        super(ReservaController);
    }

    routes(): void {
        this.router.get('/reserva', (req, res) => this.controller.getReservas(req, res));
    }
} 