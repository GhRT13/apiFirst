import { AreaController } from "./controller/area.controller";
import { BaseRouter } from "../shared/routers/router";

export class AreaRouter extends BaseRouter<AreaController> {
    constructor() {
        super(AreaController);
    }

    routes(): void {
        this.router.get('/area', (req, res) => this.controller.getAreas(req, res));
        this.router.get('/allareas', (req, res) => this.controller.getAllAreas(req, res));
    }
} 