"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaController = void 0;
class AreaController {
    getAreas(req, res) {
        res.status(200).json({
            area: "Listado de Areas",
        });
    }
}
exports.AreaController = AreaController;
