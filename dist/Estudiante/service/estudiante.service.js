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
exports.EstudianteService = void 0;
const estudiante_entity_1 = require("../entity/estudiante.entity");
const base_service_1 = require("../../config/base.service");
const usuario_entity_1 = require("../../usuario/entity/usuario.entity");
class EstudianteService extends base_service_1.BaseService {
    constructor() {
        super(estudiante_entity_1.EstudianteEntity);
    }
    // Servicio para obtener todos los estudiantes
    findAllEstudiantes() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).find({ relations: ["usuario"] });
        });
    }
    // Servicio para obtener un estudiante según id
    findEstudianteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).findOne({ where: { id }, relations: ["usuario"] });
        });
    }
    // Servicio para crear un estudiante
    createEstudiante(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield this.execRepository;
            // Verificar si el usuario existe
            const usuario = yield repository.manager.findOne(usuario_entity_1.UsuarioEntity, { where: { id: body.id_usuario } });
            if (!usuario) {
                throw new Error("El usuario no existe"); // Manejo de error si el usuario no se encuentra
            }
            // Crear el estudiante y asociarlo al usuario
            const estudiante = new estudiante_entity_1.EstudianteEntity();
            estudiante.id_usuario = body.id_usuario; // Asocia el ID del usuario
            estudiante.carrera = body.carrera;
            estudiante.anio = body.anio;
            estudiante.becado = body.becado;
            estudiante.cuarto = body.cuarto;
            return repository.save(estudiante); // Guarda el estudiante en la base de datos
        });
    }
    // Eliminar un estudiante
    deleteEstudiante(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).delete({ id });
        });
    }
    // Actualizar un estudiante
    updateEstudiante(id, infoUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).update(id, infoUpdate);
        });
    }
}
exports.EstudianteService = EstudianteService;
