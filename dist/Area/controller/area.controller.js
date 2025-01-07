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
exports.AreaController = void 0;
const area_service_1 = require("../service/area.service");
class AreaController {
    constructor() {
        this.areaService = new area_service_1.AreaService();
    }
    // Obtener todas las áreas
    getAreas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const areas = yield this.areaService.findAllAreas();
                res.status(200).json(areas);
            }
            catch (error) {
                console.error('Error en getAreas:', error);
                res.status(500).json({ message: "Error al obtener áreas", error: error.message });
            }
        });
    }
    // Obtener un área por ID
    getAreaById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const area = yield this.areaService.findAreaById(id);
                if (area) {
                    res.status(200).json(area);
                }
                else {
                    res.status(404).json({ message: "Área no encontrada" });
                }
            }
            catch (error) {
                console.error('Error en getAreaById:', error);
                res.status(500).json({ message: "Error al obtener el área" });
            }
        });
    }
    // Crear nueva área
    createArea(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const areaData = req.body;
            try {
                const newArea = yield this.areaService.createArea(areaData);
                res.status(201).json(newArea);
            }
            catch (error) {
                console.error('Error en createArea:', error);
                res.status(500).json({ message: "Error al crear el área" });
            }
        });
    }
    // Actualizar un área
    updateArea(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const areaData = req.body;
            try {
                const updatedArea = yield this.areaService.updateArea(id, areaData);
                if (updatedArea) {
                    res.status(200).json(updatedArea);
                }
                else {
                    res.status(404).json({ message: "Área no encontrada" });
                }
            }
            catch (error) {
                console.error('Error en updateArea:', error);
                res.status(500).json({ message: "Error al actualizar el área" });
            }
        });
    }
    // Eliminar un área
    deleteArea(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const result = yield this.areaService.deleteArea(id);
                if (result && result.affected && result.affected > 0) {
                    res.status(204).send();
                }
                else {
                    res.status(404).json({ message: "Área no encontrada" });
                }
            }
            catch (error) {
                console.error('Error en deleteArea:', error);
                res.status(500).json({ message: "Error al eliminar el área" });
            }
        });
    }
}
exports.AreaController = AreaController;
