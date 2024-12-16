"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatoRouter = void 0;
const plato_controller_1 = require("./controller/plato.controller");
const router_1 = require("../shared/routers/router");
class PlatoRouter extends router_1.BaseRouter {
    constructor() {
        super(plato_controller_1.PlatoController);
    }
    routes() {
        this.router.get('/plato', (req, res) => this.controller.getPlatos(req, res));
    }
}
exports.PlatoRouter = PlatoRouter;
