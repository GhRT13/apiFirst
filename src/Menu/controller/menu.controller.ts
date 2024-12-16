import { Request, Response } from "express";

export class MenuController {
    getMenus(req: Request, res: Response) {
        res.status(200).json({
            menu: "Listado de Menus",
        });
    }
} 