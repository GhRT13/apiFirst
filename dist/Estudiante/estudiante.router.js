"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudianteRouter = void 0;
const estudiante_controller_1 = require("./controller/estudiante.controller");
const router_1 = require("../shared/routers/router");
class EstudianteRouter extends router_1.BaseRouter {
    constructor() {
        super(estudiante_controller_1.EstudianteController);
    }
    routes() {
        this.router.get('/estudiante', (req, res) => this.controller.getEstudiantes(req, res));
    }
}
exports.EstudianteRouter = EstudianteRouter;
