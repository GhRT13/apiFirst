"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrabajadorController = void 0;
class TrabajadorController {
    getTrabajadores(req, res) {
        res.status(200).json({
            trabajador: "Listado de Trabajadores",
        });
    }
}
exports.TrabajadorController = TrabajadorController;
