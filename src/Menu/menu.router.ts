import { MenuController } from "./controller/menu.controller";
import { BaseRouter } from "../shared/routers/router";

export class MenuRouter extends BaseRouter<MenuController> {
    constructor() {
        super(MenuController);
    }

    routes(): void {
        this.router.get('/menu', (req, res) => this.controller.getMenus(req, res));
    }
} 