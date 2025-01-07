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
exports.PlatoService = void 0;
const plato_entity_1 = require("../entity/plato.entity");
const base_service_1 = require("../../config/base.service");
class PlatoService extends base_service_1.BaseService {
    constructor() {
        super(plato_entity_1.PlatoEntity);
    }
    findAllPlatos() {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield this.execRepository;
            return repository.find();
        });
    }
    findPlatoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield this.execRepository;
            return repository.findOneBy({ id });
        });
    }
    createPlato(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield this.execRepository;
            return repository.save(body);
        });
    }
    deletePlato(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield this.execRepository;
            return repository.delete({ id });
        });
    }
    updatePlato(id, infoUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield this.execRepository;
            const plato = yield repository.findOneBy({ id });
            if (!plato) {
                return null;
            }
            repository.merge(plato, infoUpdate);
            return repository.save(plato);
        });
    }
}
exports.PlatoService = PlatoService;
