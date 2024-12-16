"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaRouter = void 0;
const area_controller_1 = require("./controller/area.controller");
const router_1 = require("../shared/routers/router");
class AreaRouter extends router_1.BaseRouter {
    constructor() {
        super(area_controller_1.AreaController);
    }
    routes() {
        this.router.get('/area', (req, res) => this.controller.getAreas(req, res));
        this.router.get('/allareas', (req, res) => this.controller.getAllAreas(req, res));
    }
}
exports.AreaRouter = AreaRouter;
