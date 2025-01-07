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
exports.TrabajadorController = void 0;
const trabajador_service_1 = require("../service/trabajador.service");
class TrabajadorController {
    constructor() {
        this.trabajadorService = new trabajador_service_1.TrabajadorService();
    }
    // Obtener todos los trabajadores
    getTrabajadores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const trabajadores = yield this.trabajadorService.findAllTrabajadores();
                res.status(200).json(trabajadores);
            }
            catch (error) {
                console.error('Error en getTrabajadores:', error);
                res.status(500).json({ message: "Error al obtener trabajadores", error: error.message });
            }
        });
    }
    // Obtener un trabajador por ID
    getTrabajadorById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const trabajador = yield this.trabajadorService.findTrabajadorById(id);
                if (trabajador) {
                    res.status(200).json(trabajador);
                }
                else {
                    res.status(404).json({ message: "Trabajador no encontrado" });
                }
            }
            catch (error) {
                console.error('Error en getTrabajadorById:', error);
                res.status(500).json({ message: "Error al obtener el trabajador" });
            }
        });
    }
    // Crear nuevo trabajador
    createTrabajador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const trabajadorData = req.body;
            try {
                const newTrabajador = yield this.trabajadorService.createTrabajador(trabajadorData);
                res.status(201).json(newTrabajador);
            }
            catch (error) {
                console.error('Error en createTrabajador:', error);
                res.status(500).json({ message: "Error al crear el trabajador" });
            }
        });
    }
    // Actualizar un trabajador
    updateTrabajador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const trabajadorData = req.body;
            try {
                const updatedTrabajador = yield this.trabajadorService.updateTrabajador(id, trabajadorData);
                if (updatedTrabajador) {
                    res.status(200).json(updatedTrabajador);
                }
                else {
                    res.status(404).json({ message: "Trabajador no encontrado" });
                }
            }
            catch (error) {
                console.error('Error en updateTrabajador:', error);
                res.status(500).json({ message: "Error al actualizar el trabajador" });
            }
        });
    }
    // Eliminar un trabajador
    deleteTrabajador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const result = yield this.trabajadorService.deleteTrabajador(id);
                if (result && result.affected && result.affected > 0) {
                    res.status(204).send(); // Trabajador eliminado
                }
                else {
                    res.status(404).json({ message: "Trabajador no encontrado" });
                }
            }
            catch (error) {
                console.error('Error en deleteTrabajador:', error);
                res.status(500).json({ message: "Error al eliminar el trabajador" });
            }
        });
    }
}
exports.TrabajadorController = TrabajadorController;
