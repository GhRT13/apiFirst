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
exports.MenuPlatoService = void 0;
const menu_plato_entity_1 = require("../entity/menu-plato.entity");
const base_service_1 = require("../../config/base.service");
class MenuPlatoService extends base_service_1.BaseService {
    constructor() {
        super(menu_plato_entity_1.MenuPlatoEntity);
    }
    // Servicio para crear una relación entre menú y plato
    createMenuPlato(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).save(body);
        });
    }
    // Eliminar una relación entre menú y plato
    deleteMenuPlato(id_menu, id_plato) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).delete({ id_menu, id_plato });
        });
    }
}
exports.MenuPlatoService = MenuPlatoService;
