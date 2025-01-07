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
exports.ReservaService = void 0;
const reserva_entity_1 = require("../entity/reserva.entity");
const base_service_1 = require("../../config/base.service");
class ReservaService extends base_service_1.BaseService {
    constructor() {
        super(reserva_entity_1.ReservaEntity);
    }
    // Servicio para obtener todas las reservas
    findAllReservas() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).find();
        });
    }
    // Servicio para obtener una reserva según id
    findReservaById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).findOneBy({ id });
        });
    }
    // Servicio para crear una reserva
    createReserva(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).save(body);
        });
    }
    // Eliminar una reserva
    deleteReserva(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).delete({ id });
        });
    }
    // Actualizar una reserva
    updateReserva(id, infoUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).update(id, infoUpdate);
        });
    }
}
exports.ReservaService = ReservaService;
