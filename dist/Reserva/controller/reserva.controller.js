"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservaController = void 0;
class ReservaController {
    getReservas(req, res) {
        res.status(200).json({
            reserva: "Listado de Reservas",
        });
    }
}
exports.ReservaController = ReservaController;
