"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrabajadorRouter = void 0;
const trabajador_controller_1 = require("./controller/trabajador.controller");
const router_1 = require("../shared/routers/router");
class TrabajadorRouter extends router_1.BaseRouter {
    constructor() {
        super(trabajador_controller_1.TrabajadorController);
    }
    routes() {
        this.router.get('/trabajador', (req, res) => this.controller.getTrabajadores(req, res));
    }
}
exports.TrabajadorRouter = TrabajadorRouter;
