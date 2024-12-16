"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuController = void 0;
class MenuController {
    getMenus(req, res) {
        res.status(200).json({
            menu: "Listado de Menus",
        });
    }
}
exports.MenuController = MenuController;
