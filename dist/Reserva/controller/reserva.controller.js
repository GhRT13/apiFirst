"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservaController = void 0;
const reserva_service_1 = require("../service/reserva.service");
class ReservaController {
    constructor() {
        this.reservaService = new reserva_service_1.ReservaService();
    }
    // Obtener todas las reservas
    getReservas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reservas = yield this.reservaService.findAllReservas();
                res.status(200).json(reservas);
            }
            catch (error) {
                console.error('Error en getReservas:', error);
                res.status(500).json({ message: "Error al obtener reservas", error: error.message });
            }
        });
    }
    // Obtener una reserva por ID
    getReservaById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const reserva = yield this.reservaService.findReservaById(id);
                if (reserva) {
                    res.status(200).json(reserva);
                }
                else {
                    res.status(404).json({ message: "Reserva no encontrada" });
                }
            }
            catch (error) {
                console.error('Error en getReservaById:', error);
                res.status(500).json({ message: "Error al obtener la reserva" });
            }
        });
    }
    // Crear nueva reserva
    createReserva(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reservaData = req.body;
            try {
                const newReserva = yield this.reservaService.createReserva(reservaData);
                res.status(201).json(newReserva);
            }
            catch (error) {
                console.error('Error en createReserva:', error);
                res.status(500).json({ message: "Error al crear la reserva" });
            }
        });
    }
    // Actualizar una reserva
    updateReserva(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const reservaData = req.body;
            try {
                const updatedReserva = yield this.reservaService.updateReserva(id, reservaData);
                if (updatedReserva) {
                    res.status(200).json(updatedReserva);
                }
                else {
                    res.status(404).json({ message: "Reserva no encontrada" });
                }
            }
            catch (error) {
                console.error('Error en updateReserva:', error);
                res.status(500).json({ message: "Error al actualizar la reserva" });
            }
        });
    }
    // Eliminar una reserva
    deleteReserva(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const result = yield this.reservaService.deleteReserva(id);
                if (result && result.affected && result.affected > 0) {
                    res.status(204).send();
                }
                else {
                    res.status(404).json({ message: "Reserva no encontrada" });
                }
            }
            catch (error) {
                console.error('Error en deleteReserva:', error);
                res.status(500).json({ message: "Error al eliminar la reserva" });
            }
        });
    }
}
exports.ReservaController = ReservaController;
