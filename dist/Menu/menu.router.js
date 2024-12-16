"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuRouter = void 0;
const menu_controller_1 = require("./controller/menu.controller");
const router_1 = require("../shared/routers/router");
class MenuRouter extends router_1.BaseRouter {
    constructor() {
        super(menu_controller_1.MenuController);
    }
    routes() {
        this.router.get('/menu', (req, res) => this.controller.getMenus(req, res));
    }
}
exports.MenuRouter = MenuRouter;
