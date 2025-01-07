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
exports.TrabajadorService = void 0;
const trabajador_entity_1 = require("../entity/trabajador.entity");
const base_service_1 = require("../../config/base.service");
const usuario_entity_1 = require("../../usuario/entity/usuario.entity");
class TrabajadorService extends base_service_1.BaseService {
    constructor() {
        super(trabajador_entity_1.TrabajadorEntity);
    }
    // Servicio para obtener todos los trabajadores
    findAllTrabajadores() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).find({ relations: ["usuario"] });
        });
    }
    // Servicio para obtener un trabajador según id
    findTrabajadorById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).findOne({ where: { contrato: id }, relations: ["usuario"] });
        });
    }
    // Servicio para crear un trabajador
    createTrabajador(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield this.execRepository;
            // Verificar si el usuario existe
            const usuario = yield repository.manager.findOne(usuario_entity_1.UsuarioEntity, { where: { id: body.id_usuario } });
            if (!usuario) {
                throw new Error("El usuario no existe"); // Manejo de error si el usuario no se encuentra
            }
            // Crear el trabajador y asociarlo al usuario
            const trabajador = new trabajador_entity_1.TrabajadorEntity();
            trabajador.id_usuario = body.id_usuario; // Asocia el ID del usuario
            return repository.save(trabajador);
        });
    }
    // Eliminar un trabajador
    deleteTrabajador(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).delete({ contrato: id });
        });
    }
    // Actualizar un trabajador
    updateTrabajador(id, infoUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).update(id, infoUpdate);
        });
    }
}
exports.TrabajadorService = TrabajadorService;
