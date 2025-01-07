import { Request, Response } from "express";
import { MenuPlatoService } from "../service/menu-plato.service";
import { MenuPlatoDTO } from "../dto/menu-plato.dto";

export class MenuPlatoController {
    private menuPlatoService: MenuPlatoService;

    constructor() {
        this.menuPlatoService = new MenuPlatoService();
    }

    // Crear nueva relación entre menú y plato
    async createMenuPlato(req: Request, res: Response) {
        const menuPlatoData: MenuPlatoDTO = req.body;
        try {
            const newMenuPlato = await this.menuPlatoService.createMenuPlato(menuPlatoData);
            res.status(201).json(newMenuPlato);
        } catch (error) {
            console.error('Error en createMenuPlato:', error);
            res.status(500).json({ message: "Error al crear la relación entre menú y plato" });
        }
    }

    // Eliminar relación entre menú y plato
    async deleteMenuPlato(req: Request, res: Response) {
        const { id_menu, id_plato } = req.params;
        try {
            const result = await this.menuPlatoService.deleteMenuPlato(id_menu, id_plato);
            if (result && result.affected && result.affected > 0) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: "Relación entre menú y plato no encontrada" });
            }
        } catch (error) {
            console.error('Error en deleteMenuPlato:', error);
            res.status(500).json({ message: "Error al eliminar la relación entre menú y plato" });
        }
    }
}
