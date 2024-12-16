"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatoController = void 0;
class PlatoController {
    getPlatos(req, res) {
        res.status(200).json({
            plato: "Listado de Platos",
        });
    }
}
exports.PlatoController = PlatoController;
