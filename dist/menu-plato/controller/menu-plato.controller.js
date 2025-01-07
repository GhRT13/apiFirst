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
exports.MenuPlatoController = void 0;
const menu_plato_service_1 = require("../service/menu-plato.service");
class MenuPlatoController {
    constructor() {
        this.menuPlatoService = new menu_plato_service_1.MenuPlatoService();
    }
    // Crear nueva relación entre menú y plato
    createMenuPlato(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const menuPlatoData = req.body;
            try {
                const newMenuPlato = yield this.menuPlatoService.createMenuPlato(menuPlatoData);
                res.status(201).json(newMenuPlato);
            }
            catch (error) {
                console.error('Error en createMenuPlato:', error);
                res.status(500).json({ message: "Error al crear la relación entre menú y plato" });
            }
        });
    }
    // Eliminar relación entre menú y plato
    deleteMenuPlato(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_menu, id_plato } = req.params;
            try {
                const result = yield this.menuPlatoService.deleteMenuPlato(id_menu, id_plato);
                if (result && result.affected && result.affected > 0) {
                    res.status(204).send();
                }
                else {
                    res.status(404).json({ message: "Relación entre menú y plato no encontrada" });
                }
            }
            catch (error) {
                console.error('Error en deleteMenuPlato:', error);
                res.status(500).json({ message: "Error al eliminar la relación entre menú y plato" });
            }
        });
    }
}
exports.MenuPlatoController = MenuPlatoController;
