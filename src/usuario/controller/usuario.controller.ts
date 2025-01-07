import { Request, Response } from "express";
import { UsuarioService } from "../service/usuario.service";
import { UsuarioDTO } from "../dto/usuario.dto";

export class UsuarioController {
    private usuarioService: UsuarioService;

    constructor() {
        this.usuarioService = new UsuarioService();
    }

    // Obtener todos los usuarios
    async getUsuarios(req: Request, res: Response) {
        try {
            const usuarios = await this.usuarioService.findAllUsuarios(); // {{ edit_1 }}
            res.status(200).json(usuarios);
        } catch (error: any) {
            console.error('Error en getUsuarios:', error); // Registra el error completo
            res.status(500).json({ message: "Error al obtener usuarios", error: error.message }); // Incluye el mensaje de error
        }
    }

    // Obtener un usuario por ID
    async getUsuarioById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const usuario = await this.usuarioService.findUsuarioById(id);
            if (usuario) {
                res.status(200).json(usuario);
            } else {
                res.status(404).json({ message: "Usuario no encontrado" });
            }
        } catch (error) {
            console.error('Error en getUsuarioById:', error);
            res.status(500).json({ message: "Error al obtener el usuario" });
        }
    }

    // Crear nuevo usuario
    async createUsuario(req: Request, res: Response) {
        const usuarioData: UsuarioDTO = req.body; // {{ edit_3 }}
        try {
            const newUsuario = await this.usuarioService.createUsuario(usuarioData); // {{ edit_4 }}
            res.status(201).json(newUsuario);
        } catch (error) {
            console.error('Error en createUsuario:', error);
            res.status(500).json({ message: "Error al crear el usuario" });
        }
    }

    // Actualizar un usuario
    async updateUsuario(req: Request, res: Response) {
        const { id } = req.params;
        const usuarioData: UsuarioDTO = req.body; // {{ edit_5 }}
        try {
            const updatedUsuario = await this.usuarioService.updateUsuario(id, usuarioData); // {{ edit_6 }}
            if (updatedUsuario) {
                res.status(200).json(updatedUsuario);
            } else {
                res.status(404).json({ message: "Usuario no encontrado" });
            }
        } catch (error) {
            console.error('Error en updateUsuario:', error);
            res.status(500).json({ message: "Error al actualizar el usuario" });
        }
    }

    // Eliminar un usuario
    async deleteUsuario(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const result = await this.usuarioService.deleteUsuario(id); // {{ edit_1 }}
            if (result && result.affected && result.affected > 0) { // {{ edit_2 }} Verifica que result no sea null y que affected esté definido
                res.status(204).send(); // Usuario eliminado
            } else {
                res.status(404).json({ message: "Usuario no encontrado" });
            }
        } catch (error) {
            console.error('Error en deleteUsuario:', error);
            res.status(500).json({ message: "Error al eliminar el usuario" });
        }
    }
}