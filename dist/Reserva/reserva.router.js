"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservaRouter = void 0;
const reserva_controller_1 = require("./controller/reserva.controller");
const router_1 = require("../shared/routers/router");
class ReservaRouter extends router_1.BaseRouter {
    constructor() {
        super(reserva_controller_1.ReservaController);
    }
    routes() {
        this.router.get('/reserva', (req, res) => this.controller.getReservas(req, res));
    }
}
exports.ReservaRouter = ReservaRouter;
