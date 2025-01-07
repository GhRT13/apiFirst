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
exports.PlatoController = void 0;
const plato_service_1 = require("../service/plato.service");
class PlatoController {
    constructor() {
        this.platoService = new plato_service_1.PlatoService();
    }
    // Obtener todos los platos
    getPlatos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const platos = yield this.platoService.findAllPlatos();
                res.status(200).json(platos);
            }
            catch (error) {
                console.error('Error en getPlatos:', error);
                res.status(500).json({ message: "Error al obtener platos", error: error.message });
            }
        });
    }
    // Obtener un plato por ID
    getPlatoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const plato = yield this.platoService.findPlatoById(id);
                if (plato) {
                    res.status(200).json(plato);
                }
                else {
                    res.status(404).json({ message: "Plato no encontrado" });
                }
            }
            catch (error) {
                console.error('Error en getPlatoById:', error);
                res.status(500).json({ message: "Error al obtener el plato" });
            }
        });
    }
    // Crear nuevo plato
    createPlato(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const platoData = req.body;
            try {
                const newPlato = yield this.platoService.createPlato(platoData);
                res.status(201).json(newPlato);
            }
            catch (error) {
                console.error('Error en createPlato:', error);
                res.status(500).json({ message: "Error al crear el plato" });
            }
        });
    }
    // Actualizar un plato
    updatePlato(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const platoData = req.body;
            try {
                const updatedPlato = yield this.platoService.updatePlato(id, platoData);
                if (updatedPlato) {
                    res.status(200).json(updatedPlato);
                }
                else {
                    res.status(404).json({ message: "Plato no encontrado" });
                }
            }
            catch (error) {
                console.error('Error en updatePlato:', error);
                res.status(500).json({ message: "Error al actualizar el plato" });
            }
        });
    }
    // Eliminar un plato
    deletePlato(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const result = yield this.platoService.deletePlato(id);
                if (result && result.affected && result.affected > 0) {
                    res.status(204).send(); // Plato eliminado
                }
                else {
                    res.status(404).json({ message: "Plato no encontrado" });
                }
            }
            catch (error) {
                console.error('Error en deletePlato:', error);
                res.status(500).json({ message: "Error al eliminar el plato" });
            }
        });
    }
}
exports.PlatoController = PlatoController;
