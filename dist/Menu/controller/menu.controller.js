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
exports.MenuController = void 0;
const menu_service_1 = require("../service/menu.service");
class MenuController {
    constructor() {
        this.menuService = new menu_service_1.MenuService();
    }
    // Obtener todos los menús
    getMenus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const menus = yield this.menuService.findAllMenus();
                res.status(200).json(menus);
            }
            catch (error) {
                console.error('Error en getMenus:', error);
                res.status(500).json({ message: "Error al obtener menús", error: error.message });
            }
        });
    }
    // Obtener un menú por ID
    getMenuById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const menu = yield this.menuService.findMenuById(id);
                if (menu) {
                    res.status(200).json(menu);
                }
                else {
                    res.status(404).json({ message: "Menú no encontrado" });
                }
            }
            catch (error) {
                console.error('Error en getMenuById:', error);
                res.status(500).json({ message: "Error al obtener el menú" });
            }
        });
    }
    // Crear nuevo menú
    createMenu(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const menuData = req.body;
            try {
                const newMenu = yield this.menuService.createMenu(menuData);
                res.status(201).json(newMenu);
            }
            catch (error) {
                console.error('Error en createMenu:', error);
                res.status(500).json({ message: "Error al crear el menú" });
            }
        });
    }
    // Actualizar un menú
    updateMenu(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const menuData = req.body;
            try {
                const updatedMenu = yield this.menuService.updateMenu(id, menuData);
                if (updatedMenu) {
                    res.status(200).json(updatedMenu);
                }
                else {
                    res.status(404).json({ message: "Menú no encontrado" });
                }
            }
            catch (error) {
                console.error('Error en updateMenu:', error);
                res.status(500).json({ message: "Error al actualizar el menú" });
            }
        });
    }
    // Eliminar un menú
    deleteMenu(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const result = yield this.menuService.deleteMenu(id);
                if (result && result.affected && result.affected > 0) {
                    res.status(204).send(); // Menú eliminado
                }
                else {
                    res.status(404).json({ message: "Menú no encontrado" });
                }
            }
            catch (error) {
                console.error('Error en deleteMenu:', error);
                res.status(500).json({ message: "Error al eliminar el menú" });
            }
        });
    }
}
exports.MenuController = MenuController;
