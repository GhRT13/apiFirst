import { Request, Response } from "express";
import { MenuService } from "../service/menu.service";
import { MenuDTO } from "../dto/menu.dto";

export class MenuController {
    private menuService: MenuService;

    constructor() {
        this.menuService = new MenuService();
    }

    // Obtener todos los menús
    async getMenus(req: Request, res: Response) {
        try {
            const menus = await this.menuService.findAllMenus();
            res.status(200).json(menus);
        } catch (error: any) {
            console.error('Error en getMenus:', error);
            res.status(500).json({ message: "Error al obtener menús", error: error.message });
        }
    }

    // Obtener un menú por ID
    async getMenuById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const menu = await this.menuService.findMenuById(id);
            if (menu) {
                res.status(200).json(menu);
            } else {
                res.status(404).json({ message: "Menú no encontrado" });
            }
        } catch (error) {
            console.error('Error en getMenuById:', error);
            res.status(500).json({ message: "Error al obtener el menú" });
        }
    }

    // Crear nuevo menú
    async createMenu(req: Request, res: Response) {
        const menuData: MenuDTO = req.body;
        try {
            const newMenu = await this.menuService.createMenu(menuData);
            res.status(201).json(newMenu);
        } catch (error) {
            console.error('Error en createMenu:', error);
            res.status(500).json({ message: "Error al crear el menú" });
        }
    }

    // Actualizar un menú
    async updateMenu(req: Request, res: Response) {
        const { id } = req.params;
        const menuData: MenuDTO = req.body;
        try {
            const updatedMenu = await this.menuService.updateMenu(id, menuData);
            if (updatedMenu) {
                res.status(200).json(updatedMenu);
            } else {
                res.status(404).json({ message: "Menú no encontrado" });
            }
        } catch (error) {
            console.error('Error en updateMenu:', error);
            res.status(500).json({ message: "Error al actualizar el menú" });
        }
    }

    // Eliminar un menú
    async deleteMenu(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const result = await this.menuService.deleteMenu(id);
            if (result && result.affected && result.affected > 0) {
                res.status(204).send(); // Menú eliminado
            } else {
                res.status(404).json({ message: "Menú no encontrado" });
            }
        } catch (error) {
            console.error('Error en deleteMenu:', error);
            res.status(500).json({ message: "Error al eliminar el menú" });
        }
    }
}
