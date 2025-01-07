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
exports.AreaService = void 0;
const area_entity_1 = require("../entity/area.entity");
const base_service_1 = require("../../config/base.service");
class AreaService extends base_service_1.BaseService {
    constructor() {
        super(area_entity_1.AreaEntity);
    }
    // servicio para obtener todos los usuarios
    findAllAreas() {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield this.execRepository;
            return repository.find();
        });
    }
    // servicio para obtener un usuario según id
    findAreaById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield this.execRepository;
            return repository.findOneBy({ id });
        });
    }
    // servicio para crear un usuario
    createArea(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield this.execRepository;
            return repository.save(body);
        });
    }
    // eliminar un usuario
    deleteArea(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield this.execRepository;
            return repository.delete({ id });
        });
    }
    // actualizar un usuario
    updateArea(id, infoUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield this.execRepository;
            return repository.update(id, infoUpdate);
        });
    }
}
exports.AreaService = AreaService;
