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
exports.UsuarioService = void 0;
const base_service_1 = require("../../config/base.service");
const usuario_entity_1 = require("../entity/usuario.entity");
class UsuarioService extends base_service_1.BaseService {
    constructor() {
        super(usuario_entity_1.UsuarioEntity);
    }
    // servicio para obtener todos los usuarios
    findAllUsuarios() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).find();
        });
    }
    // servicio para obtener un usuarios según id
    findUsuarioById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).findOneBy({ id });
        });
    }
    // servicio para crear un usuario
    createUsuario(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).save(body);
        });
    }
    // eliminar un usuario
    deleteUsuario(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).delete({ id });
        });
    }
    // actualizar un usuario
    updateUsuario(id, infoUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).update(id, infoUpdate);
        });
    }
}
exports.UsuarioService = UsuarioService;
